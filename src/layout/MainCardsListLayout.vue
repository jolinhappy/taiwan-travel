<template>
  <div class="main-cards-list-layout">
    <div class="main-cards-list-header">
      <slot name="header"/>
    </div>
    <div class="main-cards-list-body"><section class="card-section">
      <div class="section-title">
        <h2>
          <slot name="title"/>
        </h2>
        <p class="description">
          <slot name="description"/>
        </p>
      </div>
      <div class="card-list">
        <slot name="card"/>
      </div>
    </section >
    </div>
    <div class="main-cards-list-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainCardsListLayout',
  setup() {
    return {

    }
  },
})
</script>


<style lang="scss">
.main-cards-list-layout {
  .main-cards-list-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0 90px;
  }
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
}
</style>