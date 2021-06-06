<template>
  <div class=" w-full flex px-5  border-b border-spaceGray">
    <button class="btn" @click="passEvent(1)" :class=" selected === 1 ? 'border-b-4 border-' + color : ''">
      <h3>OVERVIEW</h3>
    </button>
    <button class="btn" @click="passEvent(2)" :class=" selected === 2 ? 'border-b-4 border-' + color : ''">
      <h3>STRUCTURE</h3>
    </button>
    <button class="btn" @click="passEvent(3)" :class=" selected === 3 ? 'border-b-4 border-' + color : ''">
      <h3>SURFACE</h3>
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
    @apply flex-grow text-center py-4 focus:outline-none;
  }
</style>