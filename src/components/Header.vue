<template>
  <header class="py-4 px-7 flex justify-between items-center relative border-b border-spaceGray">
    <a href="#" class="text-white text-logo font-antonio">THE PLANETS</a>
    <Menu/>
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Menu
  }
}
</script>
