<template>
  <div class="w-full flex px-5  border-b border-spaceGray order-3 md:w-1/2 md:flex-col md:border-b-0 md:gap-4 md:justify-center">
    <button class="btn" @click="passEvent(1)" :class=" selected === 1 ? 'border-b-4 border-' + color + ' md:border-0 md:bg-'+color : 'md:border'">
      <span class="hidden md:inline text-h3 font-bold text-spaceGray mr-4">01</span>
      <h3 class="inline">OVERVIEW</h3>
    </button>
    <button class="btn" @click="passEvent(2)" :class=" selected === 2 ? 'border-b-4 border-' + color + ' md:border-0 md:bg-'+color : 'md:border'">
      <span class="hidden md:inline text-h3 font-bold text-spaceGray mr-4">02</span>
      <h3 class="inline"><span class="hidden md:inline">INTERNAL </span>STRUCTURE</h3>
    </button>
    <button class="btn" @click="passEvent(3)" :class=" selected === 3 ? 'border-b-4 border-' + color + ' md:border-0 md:bg-'+color : 'md:border'">
      <span class="hidden md:inline text-h3 font-bold text-spaceGray mr-4">03</span>
      <h3 class="inline">SURFACE <span class="hidden md:inline">GEOLOGY</span></h3>
    </button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SectionsMenu",
  props : {
    color : String,
    selected: Number
  },
  methods: {
    passEvent(selected) {
      this.$emit('changeSelected',selected)
    }
  }
}
</script>

<style scoped>
  .btn {
    @apply flex-grow text-center py-4 focus:outline-none md:text-left md:px-5 md:border-spaceGray md:max-h-10 md:py-0 ;
  }
</style>