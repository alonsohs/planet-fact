<template>
  <div class="w-full h-16 border border-spaceGray flex items-center justify-between px-9 md:flex-col md:h-auto md:px-1 md:gap-2 md:pl-4 md:py-4 md:items-start">
    <h4 class="text-spaceGray">{{ property }}</h4>
    <h2>{{ value }}</h2>
  </div>
</template>

<script>
export default {
  name: "PlanetStat",
  props: {
    property: String,
    value: String
  }
}
</script>

<style scoped>

</style>