<template>
  <div class="px-7 py-10  flex flex-col gap-3">
    <PlanetStat property="Rotation time" :value="rotation"/>
    <PlanetStat property="revolution time" :value="revolution"/>
    <PlanetStat property="radius" :value="radius"/>
    <PlanetStat property="average temp" :value="temperature"/>
  </div>
</template>

<script>
import PlanetStat from "./PlanetStat.vue";

export default {
name: "PlanetStatsContainer",
  components: {
    PlanetStat
  },
  props: {
    rotation: String,
    revolution: String,
    radius: String,
    temperature: String
  }
}
</script>

<style scoped>

</style>