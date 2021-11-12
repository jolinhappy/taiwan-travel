<template>
  <div id="main">
    <BaseLayout>
      <template #header>
        <Navigation/>
      </template>
      <template #body>
        <router-view/>
      </template>
    </BaseLayout>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseLayout from './layout/BaseLayout.vue';
import Navigation from './components/common/Navigation.vue';


export default defineComponent({
  components: {
    BaseLayout,
    Navigation,
  },
  setup() {
    return {}
  },
})
</script>


<style lang="scss">
nav {
  height: 80px;
  background-color: #ffffff;
  position: relative;
  .main-title-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);
    img {
      width: 40px;
      margin-right: 6px;
    }
    h1 {
      font-size: 20px;
      font-weight: 900;
      color: #08A6BB;
      font-style: italic;
    }
  }
  .nav-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: #ffffff;
    .nav-item:hover {
      color: #08A6BB;
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 768px) {
  nav {
    &.navigation {
      display: flex;
      padding: 29px 94px 28px 76px;
      box-sizing: border-box;
    }
    justify-content: space-between;
    box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);
    .main-title-container {
      display: flex;
      box-shadow: unset;
    }
    .nav-items {
      all: unset;
      padding-right: 30px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      .nav-item {
        font-weight: 500;
        font-size: 20px;
        &:nth-child(even) {
          margin: 0 57px;
        }
      }
    }
  
  }
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
