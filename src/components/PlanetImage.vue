<template>
  <div class="planetImage__container flex px-5 justify-center items-center relative">
    <img v-if="selected === 1" :src="'src/'+images.planet" alt="planet" class="w-auto transform scale-50">
    <img v-else :src="'src/'+images.internal" alt="Internal planet" class="w-auto transform scale-50">
    <img v-if="selected === 3" :src="'src/'+images.geology" alt="Planet geology" class="absolute w-1/5 top-1/2">
  </div>
</template>

<script>
export default {
  name: "PlanetImage",
  props: {
    images: Object,
    selected: Number
  }
}
</script>

<style scoped>
  .planetImage__container {
    min-height: 300px;
  }
</style>