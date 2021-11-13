<template>
  <MainCardsListLayout>
    <template #header>
      <Carousel @search="handleSearch"/>
    </template>
    <template #title>{{ currentCity }}景點</template>
    <template #description>台灣的各個美景，都美不勝收。<br>等你一同來發現這座寶島的奧妙！</template>
    <template #card>
      <template v-if="currentPageResult?.length > 0">
        <Card v-for="spot in currentPageResult" :spot="spot" :key="spot.ID" @open="openDetail"/>
      </template>
      <template v-else>
        <div class="no-data">查無相關資料</div>
      </template>
    </template>
    <template #footer>
      <Pagination v-if="totalPages!==0" :currentPage="currentPage" :totalPages="totalPages" @change="handlePageChange"/>
    </template>
  </MainCardsListLayout>
  <DetailDialog v-model="isShowDetail" :scenticDetail="scenticDetail"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainCardsListLayout from '@/layout/MainCardsListLayout.vue';
import { IScenicSpotTourismInfo } from '@/types/api-handler';
import apiHandler from '@/api-handlers/api-handler';
import { taiwanLocation } from '@/utils/location';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'TouristSight',
  components: {
    MainCardsListLayout,
  },
  setup() {
    const route = useRoute();
    const isShowDetail = ref<boolean>(false);
    const scenticDetail = ref<IScenicSpotTourismInfo | null>(null);
    const searchResult = ref<IScenicSpotTourismInfo[] | null>([]);
    const currentCity = ref<string>('');
    const pageSize = 9;
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(0);
    const currentPageResult = ref<IScenicSpotTourismInfo[] | null>(null);
    const openDetail = (spot: IScenicSpotTourismInfo) => {
      isShowDetail.value = true;
      scenticDetail.value = spot;
    }
    const getCityText = (location: string) => {
      taiwanLocation.forEach((item) => {
        if (item.value === location) {
          currentCity.value = item.name;
        }
        if (!location) {
          currentCity.value = '全臺';
        }
      })
    };
    const getCitySights = async(city: string, subCategory: string) => {
      try {
        if (!city) {
          const res = await apiHandler.getAllScenicSpots(300);
          if (res) {
            if (!subCategory || subCategory === '所有類別') {
              searchResult.value = await res.data;
              return;
            }
            if (subCategory) {
              res.data.forEach((item: IScenicSpotTourismInfo) => {              
                if (item.Class1 && item.Class1.toString() === subCategory) {
                  searchResult.value?.push(item);
                }
              });
            }
          }
          return;
        }
        const res = await apiHandler.getOneCityScenicSpots(city);
        if (res) {
          if (!subCategory || subCategory === '所有類別') {
            searchResult.value = await res.data;
            return;
          }
          if (subCategory) {
            res.data.forEach((item: IScenicSpotTourismInfo) => {              
              if (item.Class1 && item.Class1.toString() === subCategory) {
                searchResult.value?.push(item);
              }
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getTotalPages = () => {
      if (searchResult.value) {
        totalPages.value = Math.ceil(searchResult.value?.length / pageSize);
      }
    };
   
    const getCurrentPageResult = () => {
      if (searchResult.value) {
        const endIndex = currentPage.value * pageSize;
        const startIndex = endIndex - pageSize;
        currentPageResult.value = searchResult.value?.slice(startIndex, endIndex);
      }
    };

    const handlePageChange = (v: number) => {
      currentPage.value = v;
      getCurrentPageResult();
    }

    const handleSearch = async(v: any) => {
      const { location, subCategory } = v;
      getCityText(location as string);
      await getCitySights(location as string, subCategory as string);
      await getTotalPages();
      await getCurrentPageResult();
    };

    return {
      route,
      currentPageResult,
      currentCity,
      totalPages,
      currentPage,
      isShowDetail,
      scenticDetail,
      openDetail,
      getCitySights,
      getCityText,
      getTotalPages,
      getCurrentPageResult,
      handlePageChange,
      handleSearch,
      searchResult,
    }
  },
  async created() {
    const { location, subCategory } = await this.$route.params;
    await this.getCityText(location as string);
    await this.getCitySights(location as string, subCategory as string);
    await this.getTotalPages();
    await this.getCurrentPageResult();
  }
})
</script>

<style lang="scss">
.no-info {
  font-weight: bold;
}
</style>