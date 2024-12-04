<template>
  <div
    class="fixed bottom-8 right-5 cursor-pointer hidden md:block"
    @click="backToTop"
  >
    <img src="/images/backtotop.png" alt="" width="40px" height="40px" />
  </div>
</template>

<script setup>
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
