<template>
  <div class="w-full bg-[#041935] md:p-6">
    <h2
      class="uppercase text-xl font-bold text-white text-center md:text-start mt-5 md:m-0 md:pl-5"
    >
      Sản phẩm truyền hình
    </h2>
    <div class="hidden md:flex gap-5 w-full justify-center mt-3">
      <div
        v-for="app in apps"
        :key="app.name"
        class="bg-[#eaeaea] rounded-lg overflow-hidden"
      >
        <div class="overflow-hidden">
          <img :src="app.path" alt="" />
        </div>
        <p class="text-center p-1 text-sm">{{ app.name }}</p>
      </div>
    </div>
    <div class="m-8 md:m-0 md:hidden">
      <swiper
        :slidesPerView="1"
        :spaceBetween="70"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="app in apps" :key="app.name" class="">
          <div class="overflow-hidden">
            <img :src="app.path" alt="" class="w-full h-full" />
          </div>
          <p class="text-center p-2 text-sm bg-[#eaeaea]">{{ app.name }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";
import { Navigation, Pagination, History } from "swiper/modules";

const modules = ref([Navigation, Pagination, History]);

const apps = [
  {
    path: "/images/most-content/tvad.jpg",
    name: "Dịch vụ quảng cáo",
  },
  {
    path: "/images/most-content/vtvgo.jpg",
    name: "Sản phẩm nội dung số",
  },
  {
    path: "/images/most-content/vtvcab.jpg",
    name: "Truyền hình trả tiền",
  },
  {
    path: "/images/most-content/k+.jpg",
    name: "Truyền hình trả tiền",
  },
];
</script>

<style scoped>
::v-deep(.swiper-pagination) {
  /* display: none; */
  bottom: -5px;
  width: 100%;
}

::v-deep(.swiper-pagination-bullet) {
  width: calc(100% / 4 - 8px);
  height: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 4px;
  border-radius: 0;
}

::v-deep(.swiper-pagination-bullet-active) {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
