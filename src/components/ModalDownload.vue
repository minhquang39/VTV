<template>
  <div
    v-show="isDisplay"
    class="fixed inset-0 z-50 flex items-center justify-center"
    @click.self="$emit('closeModalDownload')"
  >
    <div class="w-[600px] p-[15px] bg-bgModal rounded-[22px]">
      <div class="w-full flex justify-end cursor-pointer">
        <span class="block" @click="$emit('closeModalDownload')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div class="p-3">
        <div class="flex">
          <div class="p-[20px]">
            <a href="#">
              <img src="/images/downloadMobile/btnAndroid.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/downloadMobile/androidqrcode.jpg" alt="" />
            </a>
          </div>
          <div class="p-[20px]">
            <a href="#">
              <img src="/images/downloadMobile/btniOs.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/downloadMobile/iosqrcode.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps({ isDisplay: Boolean });
const emit = defineEmits(['closeModalDownload']);
console.log(emit);
</script>
