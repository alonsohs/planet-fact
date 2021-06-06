<template>
  <div class="w-full min-h-screen bg-background bg-star-pattern text-white" >
    <Header/>
    <PlanetPage :data="planetsData[0]"/>
  </div>
</template>

<script>
import data from './data/data.json'

import Header from "./components/Header.vue";
import PlanetPage from "./components/PlanetPage.vue";

export default {
  name: 'App',
  setup (){
    const planetsData = data

    return {
      planetsData
    }
  },
  components: {
    Header,
    PlanetPage
  }
}
</script>
