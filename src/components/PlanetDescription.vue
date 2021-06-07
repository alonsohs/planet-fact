<template>
  <div class="px-7 text-center md:order-2 md:w-1/2 md:pr-0 md:text-left" >
    <h1 class="mb-6">{{name}}</h1>

    <p v-if="selected === 1" class="description">{{overview.content}}</p>
    <p v-else-if="selected === 2" class="description">{{structure.content}}</p>
    <p v-else class="description">{{geology.content}}</p>

    <p class="mt-4">
      <span class=" text-spaceGray">Source : </span>
      <a v-if="selected === 1" :href="overview.source" class="link">Wikipedia</a>
      <a v-else-if="selected === 2" :href="structure.source" class="link">Wikipedia </a>
      <a  v-else :href="geology.source" class="link">Wikipedia</a>
      <img src="../assets/icon-source.svg" alt="source" style="display: inline" class="ml-2">
    </p>
  </div>
</template>

<script>
export default {
  name: "PlanetDescription",
  props : {
    name: String,
    overview: Object,
    structure: Object,
    geology: Object,
    selected: Number
  }
}
</script>
<style scoped>

  .link {
    @apply underline font-bold text-spaceGray;
  }

  .description {
    @apply md:leading-7
  }

</style>