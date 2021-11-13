<template>
  <div class="home">
    <Carousel @search="handleSearch"/>
    <section class="card-section">
      <div class="section-title">
        <h2>熱門景點</h2>
        <p class="description">台灣的各個美景，都美不勝收。<br>等你一同來發現這座寶島的奧妙！</p>
      </div>
      <div class="card-list">
        <Card v-for="spot in TopScenitcSpots" :spot="spot" :key="spot.ID" @open="openDetail"/>
      </div>
    </section >
    <section class="category-section">
      <div class="section-title">
        <h2>活動類別</h2>
        <p class="description">各種不同的活動內容<br>邀請您一銅來共襄盛舉！</p>
      </div>
      <div class="category-list-container">
        <div class="category" @click="searchActivitiesByCategory('年度活動')">
          <div class="category-image">
            <img src="https://www.taiwan.net.tw/att/event/a694272c-4ac1-47e6-a4a0-e806d44e1dd7.jpg" alt="活動類別圖">
          </div>
          <h3>年度活動</h3>
        </div>
        <div class="category" @click="searchActivitiesByCategory('藝文活動')">
          <div class="category-image">
            <img src="https://www.taiwan.net.tw/att/event/278ea58f-42de-4252-a19a-dc29dc739f8e.jpg" alt="活動類別圖">
          </div>
          <h3>藝文活動</h3>
        </div>
        <div class="category" @click="searchActivitiesByCategory('節慶活動')">
          <div class="category-image">
            <img src="https://www.taiwan.net.tw/att/event/0ab60674-d293-4334-a8fd-c99314ddd394.jpg" alt="活動類別圖">
          </div>
          <h3>節慶活動</h3>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="https://www.taiwan.net.tw/att/event/4970b717-4f85-470e-ad64-abaec0bd0ae2.jpg" alt="活動類別圖">
          </div>
          <h3>其他</h3>
        </div>
      </div>
    </section>
    <section class="cover-section">
      <img src="https://www.taiwan.net.tw/att/event/56481545-6a53-4e4c-9365-4bd54e612fdf.jpg" alt="童玩節水舞燈光秀暨夜景">
      <div class="cover-text">
        <p>“To travel is to live”</p>
        <p>– Hans Christian Anderson-</p>
      </div>
    </section>
    <DetailDialog v-model="isShowDetail" :scenticDetail="scenticDetail"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Carousel from '@/components/common/Carousel.vue';
import Card from '@/components/common/Card.vue';
import apiHandler from '@/api-handlers/api-handler';
import { IScenicSpotTourismInfo } from '@/types/api-handler';
import { useRoute, useRouter } from 'vue-router';
import { Category } from '@/types/enum';

export default defineComponent({
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isShowDetail = ref<boolean>(false);
    const TopScenitcSpots = ref<IScenicSpotTourismInfo[] | null>(null);
    const scenticDetail = ref<IScenicSpotTourismInfo | null>(null);
    const openDetail = (spot: IScenicSpotTourismInfo) => {
      isShowDetail.value = true;
      scenticDetail.value = spot;
    }
    const get8CityScenicSpots = async() => {
      try {
        const {data} = await apiHandler.getAllScenicSpots(8);
        TopScenitcSpots.value = data.map((spot) => ({
          ...spot,
          OpenTime: '全天候開放'
        }));
      } catch (error) {
        console.log(error)
      }
    };
    const handleSearch = (v: any) => {
      const { category, subCategory, location } = v;
      switch(category) {
        case Category.Sight:
          router.push({name: 'TouristSight', params: {
            subCategory, location
          }});
          break;
        case Category.Event:
          router.push({name: 'TouristActivity', params: {
            subCategory, location
          }});
          break;
      }
    };

    const searchActivitiesByCategory = async(categoryName: string) => {
      router.push({name: 'TouristActivity', params: {
        subCategory: categoryName, location: null
      }});
    }
    return {
      isShowDetail,
      TopScenitcSpots,
      scenticDetail,
      openDetail,
      get8CityScenicSpots,
      handleSearch,
      searchActivitiesByCategory,
    }
  },
  created() {
    this.get8CityScenicSpots();
    
  }
});
</script>

<style lang="scss">
.home {
  .section-title {
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #08A6BB;
      margin-bottom: 24px;
    }
    p.description {
      font-weight: bold;
      font-size: 16px;
      color: #AEAEAE;
      line-height: 24px;
      margin-bottom: 26px;
    }
  }
  .card-section {
    padding: 46px 60px 49px 60px;
    display: flex;
    flex-direction: column;
    margin-top: 46px;
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(294px, 1fr));
      grid-gap: 20px;
      .card {
        margin-bottom: 36px;
        margin: 0px auto 46px;
      }
    }

  }
  .category-section {    
    .section-title {
      padding: 0px 60px 49px 60px;
      
    }
    .category-list-container {
      padding: 0px 24px;
      display: flex;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }    
      .category {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 87px;
        cursor: pointer;
        &:hover {
          .category-image::after {
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-color:cornsilk;
            opacity: 0.2;
            position: absolute;
            top: 0;
            left: 0;
            
          }
          h3 {
            color: #08A6BB;
          }
        }
        &+.category {
          margin-left: 31.15px;
        }
        h3 {
          margin-top: 21px;
          color: #313131;
          font-weight: bold;
          font-size: 20px;
        }
        .category-image {
          width: 205px;
          height: 260px;
          border-radius: 10px;
          filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2));
          position: relative;
          img {
            border-radius: 10px;
            width: 205px;
            height: 260px;
            object-fit: cover;
          }
        }
      }
    }
  }
  .cover-section {
    width: 100%;
    height: 352px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .cover-text {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;
      font-size: 19px;
      font-weight: bold;
      text-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
      transform: translate(-50%, -50%);
    }
  }
}

@media screen and (min-width: 992px) {
  .home {
    .category-section {
      .category-list-container {
        justify-content: center;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .home {
    .category-section {
      .category-list-container {
        justify-content: center;
        .category {
          &+.category {
            margin-left: 87px;
          }
        }
        .category-image {
          width: 255px;
          height: 327px;
          img {
            width: 255px;
            height: 327px;
          }
        }
      }
    }
    .cover-section {
      height: 332px;
      .cover-text {
        font-size: 32px;
        line-height: 37px;
      }
    }
  }
}



</style>