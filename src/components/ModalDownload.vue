<template>
  <div
    v-show="isDisplay"
    class="fixed bottom-0 top-0 left-0 right-0 z-[1] bg-customBg h-full flex items-center justify-center"
    @click.self="$emit('closeModalDownload')"
  >
    <transition name="modal" mode="out-in">
      <div
        v-show="isDisplay"
        class="w-[600px] p-[15px] bg-bgModal m-auto rounded-[22px] modal-mask"
      >
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
    </transition>
  </div>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  @apply transition-all duration-300 ease-linear;
}

.modal-enter-from {
  @apply transform translate-y-0;
}

.modal-enter-to {
  @apply transform translate-y-10;
}
</style>

<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({ isDisplay: Boolean });
const emit = defineEmits(["closeModalDownload"]);
console.log(emit);
</script>
