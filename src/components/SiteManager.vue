<template>
  <!-- Desktop -->
  <div
    class="bg-[#07356a] fixed left-0 md:top-[25%] md:w-[65px] md:py-5 md:rounded-[37px] hidden md:flex flex-col gap-4 items-center z-5"
  >
    <router-link to="/ban-tin-media">
      <div class="cursor-pointer flex flex-col items-center">
        <img
          src="/images/site-manager/play-button.png"
          alt=""
          class="w-auto mb-1"
        />
        <span class="text-[#e7ebf0] text-sm hover:text-textHover">Media</span>
      </div>
    </router-link>
    <router-link to="/goc-anh">
      <div class="cursor-pointer flex flex-col items-center">
        <img src="/images/site-manager/camera.png" alt="" class="w-auto mb-1" />
        <span class="text-[#e7ebf0] text-sm hover:text-textHover">Góc ảnh</span>
      </div></router-link
    >
    <router-link to="/ban-tin-magazine">
      <div class="cursor-pointer flex flex-col items-center">
        <img
          src="/images/site-manager/magazine.png"
          alt=""
          class="w-auto mb-1"
        />
        <span class="text-[#e7ebf0] text-sm hover:text-textHover"
          >Magazine</span
        >
      </div>
    </router-link>
    <router-link to="/ban-tin-su-kien">
      <div class="cursor-pointer flex flex-col items-center">
        <img src="/images/site-manager/event.png" alt="" class="w-auto mb-1" />
        <span class="text-[#e7ebf0] text-sm hover:text-textHover">Sự kiện</span>
      </div>
    </router-link>
    <div class="cursor-pointer flex flex-col items-center">
      <img src="/images/site-manager/mobile.png" alt="" class="w-auto mb-1" />
      <span class="text-[#e7ebf0] text-sm hover:text-textHover">Mobile</span>
    </div>
  </div>
  <!-- Mobile -->
  <div
    class="bg-[#07356a] fixed left-0 bottom-0 px-6 py-2 md:hidden gap-4 justify-between w-full z-50"
    :class="props.displayNav ? 'flex' : 'hidden'"
  >
    <router-link to="/ban-tin-media">
      <div class="cursor-pointer flex flex-col items-center">
        <img
          src="/images/site-manager/play-button.png"
          alt=""
          class="w-5 h-5"
        />
        <span class="text-[#e7ebf0] text-[11px] hover:text-textHover"
          >Media</span
        >
      </div>
    </router-link>
    <router-link to="/goc-anh">
      <div class="cursor-pointer flex flex-col items-center">
        <img src="/images/site-manager/camera.png" alt="" class="w-5 h-5" />
        <span class="text-[#e7ebf0] text-[11px] hover:text-textHover"
          >Góc ảnh</span
        >
      </div></router-link
    >
    <router-link to="/ban-tin-magazine">
      <div class="cursor-pointer flex flex-col items-center">
        <img src="/images/site-manager/magazine.png" alt="" class="w-5 h-5" />
        <span class="text-[#e7ebf0] text-[11px] hover:text-textHover"
          >Magazine</span
        >
      </div>
    </router-link>
    <router-link to="/ban-tin-su-kien">
      <div class="cursor-pointer flex flex-col items-center">
        <img src="/images/site-manager/event.png" alt="" class="w-5 h-5" />
        <span class="text-[#e7ebf0] text-[11px] hover:text-textHover"
          >Sự kiện</span
        >
      </div></router-link
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  displayNav: { type: Boolean, required: true },
});
</script>
