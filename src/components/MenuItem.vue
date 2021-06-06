<template>
  <li class=" border-gray-400">
    <a href="" class="flex items-center py-6">
      <span class="block h-5 w-5 rounded-full" :class="'bg-' + color"></span>
      <h4 class="font-spartan font-bold text-base uppercase tracking-widest leading-3 ml-4">{{sectionName}}</h4>
      <img src="../assets/icon-chevron.svg" alt="arrow icon" class="w-2 h-3 ml-auto">
    </a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    sectionName: String,
    color: String
  }
}
</script>
