<template>
  <div class="px-7 text-center" >
    <h1 class="mb-6">{{name}}</h1>

    <p v-if="selected === 1" >{{overview.content}}</p>
    <p v-else-if="selected === 2" >{{structure.content}}</p>
    <p v-else >{{geology.content}}</p>

    <p class="description mt-4">
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

</style>