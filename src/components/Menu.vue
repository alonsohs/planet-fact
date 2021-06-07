<template>
  <button class="md:hidden" @click="toggleMenu">
    <img src="../assets/icon-hamburger.svg" alt="icon menu" :class="{'opacity-50': isMenuOpen}">
  </button>
  <nav v-show="isMenuOpen" class="absolute top-full left-0 w-full p-7 bg-background mt-[20px] z-10 md:static md:bg-transparent py-4">
    <ul class="divide-y divide-spaceGray md:flex md:justify-between md:divide-y-0">
      <MenuItem section-name="mercury" color="spaceLightBlue"/>
      <MenuItem section-name="venus" color="spaceYellow"/>
      <MenuItem section-name="earth" color="spacePurple"/>
      <MenuItem section-name="mars" color="spaceOrange"/>
      <MenuItem section-name="jupiter" color="spaceRed"/>
      <MenuItem section-name="saturn" color="spaceOcre"/>
      <MenuItem section-name="uranus" color="spaceGreen"/>
      <MenuItem section-name="neptune" color="spaceBlue"/>
    </ul>
  </nav>
</template>

<script>
import {ref} from 'vue'
import MenuItem from "./MenuItem.vue";

export default {
  name: "Menu",
  setup() {
    let isMenuOpen = ref(window.matchMedia("(min-width: 768px)").matches)
    console.log(isMenuOpen)
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isMenuOpen,
      toggleMenu
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped>

</style>