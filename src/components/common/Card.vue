<template>
  <div class="card">
    <div class="card-container">
      <div class="card-image">
        <img src="https://picsum.photos/650/480?random=1" alt="資訊照片">
      </div>
      <div class="card-body">
        <div class="title">
          <h3>台北大稻埕</h3>
          <div class="time-info">
            <el-icon>
              <Clock/>
            </el-icon>
            全天候開放
          </div>
        </div>

        <p class="address">
          <img src="../../assets/location.png" alt="地標圖示">
          台北市XX區XX路
        </p>
      </div>
      <div class="card-footer">
        <el-button @click="onClick">了解更多</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Clock } from '@element-plus/icons';

export default defineComponent({
  components: {
    Clock
  },
  setup(_, { emit }) {
    const onClick = () => {
      emit('open')
    }
    return {
      onClick,
    }
  },
})
</script>


<style lang="scss">
.card {
  .card-container {
    max-width: 294px;
    height: 346px;
    background: #ffffff;
    box-shadow: 2px 2px 4px rgba(114, 142, 171, 0.1), -6px -6px 20px rgba(255, 255, 255, 0.6), 4px 4px 20px rgba(111, 140, 176, 0.41);
    border-radius: 8px;
    overflow: hidden;
    .card-image {
      height: 184px;
      img {
        width: 100%;
        height: 184px;
        object-fit: cover;
      }
    }
    .card-body {
      padding: 31px 20px 23px 20px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 17px;
          h3 {
          color: #525151;
          font-size: 20px;
          font-weight: bold; 
        }
        .time-info {
          color: #6F7789;
          font-size: 12px;
          font-weight: 300;
          display: inline-flex;
          align-items: center;
          .el-icon {
            margin-right: 6.5px;
          }
        }
      }
      .address {
        display: flex;
        color: #6F7789;
        font-size: 16px;
        font-weight: 500;
        img {
          width: 12px;
          height: 15px;
          margin-right: 8px;
        }
      }
    }
    .card-footer {
      text-align: center;
      .el-button {
        --el-button-border-color: #08A6BB;
        border-width: 4px;
        color: #08A6BB;
        padding: 0px;
        border-radius: 8px;
        width: 179px;
        height: 32px;
        font-weight: bold;
        font-size: 14px;
        &:hover {
          background-color: #08A6BB;
          border-color: #08A6BB;
          color: #ffffff;
        }
      }
    }
  }
}
</style>