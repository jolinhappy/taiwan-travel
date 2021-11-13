<template>
  <el-dialog v-model="isShowDialog" custom-class="detail-dialog">
    <div class="detail-container">
      <div class="header">
        <div class="name">{{scenticDetail.Name}}</div>
        <div class="address-info">
          <img src="../../assets/location.png" alt="地標圖示">
          <div class="address">{{scenticDetail.Address || scenticDetail.City}}</div>
        </div>
      </div>
      <div class="body">
        <div class="detail-description">
          {{scenticDetail.Description}}
        </div>
        <div class="detail-photo">
          <!-- <div class="photo-button-container">
            <img src="../../assets/photo-album.png" alt="相簿">
            相片(12) >
          </div> -->
          <div class="preview-photo">
            <img :src="pictureFilter(scenticDetail.Picture)" alt="相關照片">
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-info-item">
          <img src="../../assets/clock.png" alt="開放時間">
          {{scenticDetail.OpenTime || '無資料'}}
        </div>
        <div class="footer-info-item">
          <img src="../../assets/ticket.png" alt="門票">
          {{scenticDetail.TicketInfo || '無資料'}}
        </div>
        <div class="footer-info-item">
          <img src="../../assets/phone.png" alt="電話">
          {{scenticDetail.Phone || '無資料'}}
        </div>
        <div class="footer-info-item">
          <img src="../../assets/category.png" alt="分類">
          {{scenticDetail.Class1 || '無資料'}}
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ITourismPicture } from '@/types/api-handler';

export default defineComponent({
  name: 'DetailDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    scenticDetail: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const isShowDialog = computed({
      get: () => props.modelValue,
      set: (v) => {
        emit('update:modelValue', v);
      }
    });
    const pictureFilter = (picture: ITourismPicture | null) => {
      if (!picture?.PictureUrl1) {
        return require('../../assets/no-image-found.png');
      } else {
        return picture.PictureUrl1;
      }
    };
    return {
      isShowDialog,
      pictureFilter,
    }
  },
})
</script>

<style lang="scss">
.el-dialog.detail-dialog {
  --el-border-radius-small: 8px;
  min-width: 296px;
  .el-dialog__header {
    .el-dialog__headerbtn {
      display: flex;
      width: 20px;
      height: 20px;
      border-radius: 8px;
      background: #CBCBCB;
      align-items: center;
      justify-content: center;
      .el-icon {
        color: #ffffff;
      } 
    }
  }
  .el-dialog__body{
    .detail-container {
      .header {
        .name {
          color: #393939;
          font-size: 20px;
          font-weight: 900;
        }
        .address-info {
          display: flex;
          margin: 19.5px 0;
          align-items: center;
          img {
            width: 12px;
            height: 15px;
            margin-right: 8px;
          }
          .address {
            color: #6F7789;
            font-weight: 500;
            font-size: 12px;
          }
        }
      }
      .body {
        .detail-description {
          font-size: 14px;
          color: #6F7789;
          line-height: 24px;
        }
        .detail-photo {
          .photo-button-container {
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
            color: #08A6BB;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 13px;
            img {
              width: 13.5px;
              height: 15px;
              margin-right: 4px;
            }
          }
          .preview-photo {
            width: 100%;
            height: 150px;
            img {
              width: inherit;
              height: inherit;
              object-fit: cover;
            }
          }

        }
      }
      .footer {
        width: 100%;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 12px;
        width: 90%;
        margin: 44px auto 0px;
        .footer-info-item {
          display: flex;
          align-items: center;
          color: #08A6BB;
          font-weight: bold;
          font-size: 12px;
          // & + :nth-child(even) {
          //   margin-left: 25px;
          // }
          img {
            width: 18px;
            height: 18px;
            margin-right: 8px;
          }

        }
      }

    }

  }

}

@media screen and (min-width: 768px) {
  .el-dialog.detail-dialog {
    --el-border-radius-small: 8px;
    min-width: 296px;
    .el-dialog__header {
      .el-dialog__headerbtn {
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 8px;
        background: #CBCBCB;
        align-items: center;
        justify-content: center;
        .el-icon {
          color: #ffffff;
        } 
      }
    }
    .el-dialog__body{
      .detail-container {
        .body {
          .detail-photo {
            .preview-photo {
              width: 100%;
              height: 450px;
              img {
                width: inherit;
                height: inherit;
                object-fit: cover;
              }
            }

          }
        }
      }

    }

  }
}


</style>