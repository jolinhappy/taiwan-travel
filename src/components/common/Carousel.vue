<template>
  <div class="carousel">
    <el-carousel height="444px">
      <el-carousel-item v-for="picture in coverPictures" :key="picture">
        <img :src="picture.img" alt="封面輪播圖">
      </el-carousel-item>
    </el-carousel>
    <div class="search-form">
      <h2>Welcome to Travel Taiwan</h2>
      <el-form :inline="true">
        <el-form-item label="">
          <el-select placeholder="" class="category-select" v-model="selectedCategory" v-if="isHomePage">
            <el-option label="景點" :value="1"></el-option>
            <el-option label="活動" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select placeholder="類別" class="sub-category-select" v-model="selectedSubCategory">
            <template v-for="subCategoryOption in currentSubCategoryOptions" :key="subCategoryOption.id">
              <el-option :label="subCategoryOption.name" :value="subCategoryOption.name"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select placeholder="縣市" class="location-select" v-model="selectedLocation">
            <template v-for="location in locationList" :key="location.id">
              <el-option :label="location.name" :value="location.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">
            <img src="../../assets/search-icon.png" alt="搜尋圖示">
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { taiwanLocation, sightSubCategory, eventSubCategory, } from '@/utils/location';
import { useRouter, useRoute } from 'vue-router';
import { Category } from '@/types/enum';

export default defineComponent({
  name: 'Carousel',
  emits: ['search'],
  setup(_, {emit}) {
    const router = useRouter();
    const route = useRoute();
    const selectedCategory = ref<Category>(1);
    const selectedSubCategory = ref<number | null>(null);
    const selectedLocation = ref<string | null>(null);
    const locationList = taiwanLocation;
    const currentSubCategoryOptions = computed(() => selectedCategory.value === Category.Sight ? sightSubCategory : eventSubCategory);
    const coverPictures = ref<any>([
      {
        img: "https://www.taiwan.net.tw/att/event/d9db59b2-9d6d-4d7e-8231-fed0d97bcc52.jpg"
      },
      {
        img: "http://travel.nantou.gov.tw/manasystem/files/scenic/20150506121525_2015-3-4-9-45-43-nf1.jpg"
      },
      {
        img: "https://www.taiwan.net.tw/att/event/e15d764e-9695-4447-925e-aa86ccb73152.jpg"
      }
    ]);

    const isHomePage = computed(() => 
      !route.path.split('/').includes('tourist-sight') && !route.path.split('/').includes('tourist-activity'))
    
    const onSearch = () => {
      emit('search', {
        category: selectedCategory.value,
        subCategory: selectedSubCategory.value,
        location: selectedLocation.value,
      });
    };
    return {
      coverPictures,
      locationList,
      selectedCategory,
      selectedSubCategory,
      selectedLocation,
      currentSubCategoryOptions,
      isHomePage,
      onSearch,
    }
  },
})
</script>


<style lang="scss">
.carousel {
  position: relative;
  .el-carousel__container {
    width: 100%;
    .el-carousel__item {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .el-carousel__indicator {
    .el-carousel__button {
      height: 11.3px;
      width: 11.3px;
      border-radius: 50%;
    }
  }
  .search-form {
    position: absolute;
    top: calc(50%);
    left: calc(50%);
    transform: translate(-50%, -50%);
    h2 {
      font-weight: bold;
      font-size: 26px;
      font-style: italic;
      text-align: center;
      text-shadow: 6px 8px 12px rgba(0, 0, 0, 0.49);
      color: #ffffff;
      margin-bottom: 26px;
    }
    .el-form {
      display: flex;
      .el-button {
        width: 37px;
        height: 37px;
        border-radius: 8px;
        padding: 8px;
        background: linear-gradient(0deg, #08A6BB,20%, #08A6BB);
        --el-button-border-color: #08A6BB;
        --el-button-hover-color: #08A6BB;
        &:hover {
          background: #19c9e1;
          --el-button-border-color: #19c9e1;
        }
        span {
          img {
            width: 21.14px;
            text-align: center;
          }
        }
      }
      .el-select{
        --el-input-focus-border: #08A6BB;
        &.category-select {
          width: 70px;
        }
        &.sub-category-select {
          width: 110px;
        }      
        &.location-select {
          width: 125px;
        }
      }

    }
  }
}

@media screen and (min-width: 1200px) {
  .carousel {
    .search-form {
      h2 {
        font-size: 48px;
      }
      .el-form {
        .el-button {
          width: 42px;
          height: 42px;
        }
        .el-form-item {
          margin-right: 19px;
        }
        .el-select{
          &.category-select {
            width: 120px;
          }
          &.sub-category-select {
            width: 191px;
          }      
          &.location-select {
            width: 297px;
          }
        }
      }
    }
  }
}


</style>