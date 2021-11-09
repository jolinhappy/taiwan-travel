<template>
  <div class="home">
    <Carousel/>
    <section class="card-section">
      <div class="section-title">
        <h2>熱門景點</h2>
        <p class="description">台灣的各個美景，都美不勝收。<br>等你一同來發現這座寶島的奧妙！</p>
      </div>
      <div class="card-list">
        <Card @open="openDetail"/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section >
    <section class="category-section">
      <div class="section-title">
        <h2>活動類別</h2>
        <p class="description">各種不同的活動內容<br>邀請您一銅來共襄盛舉！</p>
      </div>
      <div class="category-list-container">
        <div class="category">
          <div class="category-image">
            <img src="https://picsum.photos/650/480?random=67" alt="活動類別圖">
          </div>
          <h3>年度活動</h3>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="https://picsum.photos/650/480?random=57" alt="活動類別圖">
          </div>
          <h3>藝文活動</h3>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="https://picsum.photos/650/480?random=29" alt="活動類別圖">
          </div>
          <h3>節慶活動</h3>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="https://picsum.photos/650/480?random=58" alt="活動類別圖">
          </div>
          <h3>其他</h3>
        </div>
      </div>
    </section>
    <section class="cover-section">
      <img src="https://picsum.photos/650/480?random=60" alt="風景圖">
      <div class="cover-text">
        <p>“To travel is to live”</p>
        <p>– Hans Christian Anderson-</p>
      </div>
    </section>
    <DetailDialog v-model="isShowDetail"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Carousel from '@/components/common/Carousel.vue';
import Card from '@/components/common/Card.vue';


export default defineComponent({
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  setup() {
    const isShowDetail = ref<boolean>(false);
    const openDetail = () => {
      isShowDetail.value = true;
    }
    return {
      isShowDetail,
      openDetail,
    }
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 10px;
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