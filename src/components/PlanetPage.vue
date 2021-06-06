<template>
  <main>
    <SectionsMenu :color="data.color" @changeSelected="handleChangeSelected" :selected="selected"/>
    <PlanetImage :images="data.images" :selected="selected"/>
    <PlanetDescription :name="data.name" :overview="data.overview" :structure="data.structure" :geology="data.geology" :selected="selected"/>
    <PlanetStatsContainer/>
  </main>
</template>

<script>
import SectionsMenu from "./SectionsMenu.vue";
import PlanetImage from "./PlanetImage.vue";
import PlanetDescription from "./PlanetDescription.vue";
import PlanetStatsContainer from "./PlanetStatsContainer.vue";
import {ref} from "vue";

export default {
  name: "PlanetPage",
  props: {
    data: {}
  },
  components:{
    SectionsMenu,
    PlanetImage,
    PlanetDescription,
    PlanetStatsContainer
  },
  setup() {
    let selected = ref(1)

    const handleChangeSelected = (newSelected) => {
        selected.value = newSelected
    }

    return {
      selected,
      handleChangeSelected
    }
  }
}
</script>

<style scoped>

</style>