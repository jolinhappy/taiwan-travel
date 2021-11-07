<template>
  <div class="carousel">
    <el-carousel height="444px">
      <el-carousel-item v-for="picture in coverPictures" :key="picture">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="picture.img" alt="封面輪播圖">
      </el-carousel-item>
    </el-carousel>
    <div class="search-form">
      <h2>Welcome to Travel Taiwan</h2>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-select placeholder="類別" class="category-select">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select placeholder="縣市" class="location-select">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            <img src="../../assets/search-icon.png" alt="搜尋圖示">
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const coverPictures = ref<any>([
      {
        img: "https://picsum.photos/1200/480?random=1"
      },
      {
        img: "https://picsum.photos/1200/480?random=23"
      },
      {
        img: "https://picsum.photos/1200/480?random=53"
      }
    ])
    return {
      coverPictures,
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
      justify-content: center;
      .el-button {
        width: 37px;
        height: 37px;
        border-radius: 8px;
        padding: 8px;
        background: linear-gradient(0deg, #08A6BB,20%, #08A6BB);
        --el-button-border-color: #08A6BB;
        --el-button-hover-color: #08A6BB;
        span {
          img {
            width: 21.14px;
            text-align: center;
          }
        }
      }
      .el-select{
        &.category-select {
          width: 107px;
        }      
        &.location-select {
          width: 175px;
        }
      }

    }
  }
}

</style>