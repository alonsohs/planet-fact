<template>
  <div class="px-7 py-10  flex flex-col gap-3">
    <PlanetStat property="Rotation" value="34343"/>
    <PlanetStat property="Rotation" value="34343"/>
    <PlanetStat property="Rotation" value="34343"/>
    <PlanetStat property="Rotation" value="34343"/>
  </div>
</template>

<script>
import PlanetStat from "./PlanetStat.vue";

export default {
name: "PlanetStatsContainer",
  components: {
    PlanetStat
  }
}
</script>

<style scoped>

</style>