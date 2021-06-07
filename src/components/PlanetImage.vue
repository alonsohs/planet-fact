<template>
  <div class="planetImage__container flex px-5 justify-center items-center relative md:order-1 ">
    <img v-if="selected===2" :src="'src/'+images.internal" alt="Internal planet" class="w-auto transform scale-50 md:scale-75">
    <img v-else :src="'src/'+images.planet" alt="planet" class="w-auto transform scale-50 md:scale-75">
    <img v-if="selected === 3" :src="'src/'+images.geology" alt="Planet geology" class="absolute w-1/5 top-1/2 md:w-28 md:top-2/3">
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

  @media (min-width: 768px) {
    .planetImage__container {
      min-height: 460px;
      min-width: 100vw;
    }
  }
</style>