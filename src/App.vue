<template>
  <HeaderComp />
  <!-- Body -->
  <div class="flex md:m-10 xl:container xl:mx-auto">
    <div class="w-screen md:w-9/12">
      <!-- Left  -->
      <router-view></router-view>
    </div>
    <!-- Right -->
    <div class="hidden md:block md:w-3/12 px-2 overflow-x-hidden">
      <LeaderComp />
      <CalenderComp />
    </div>
  </div>
  <!-- Footer  -->
</template>

<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import LeaderComp from "./components/LeaderComp.vue";
import CalenderComp from "./components/CalenderComp.vue";
</script>

<style>
html,
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
}
body {
  overflow-x: hidden;
}
</style>
