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
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
