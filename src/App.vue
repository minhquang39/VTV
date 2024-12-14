<template>
  <Header ref="header"></Header>
  <div class="flex md:m-10 md:mb-0 xl:container xl:mx-auto flex-wrap">
    <div class="w-full md:w-9/12">
      <router-view :key="route.path"></router-view>
    </div>
    <div class="hidden md:block md:w-3/12 px-2 overflow-x-hidden">
      <Leader />
      <div class="my-5">
        <Calender />
      </div>
      <div class="my-5">
        <img src="/images/lichtiepdan.jpg" alt="" />
      </div>
      <div class="my-5">
        <list-work />
      </div>
      <div>
        <img src="/images/vtv_time.jpg" alt="" />
      </div>
      <div class="my-5">
        <widget-link />
      </div>
    </div>
    <MostContent></MostContent>
  </div>
  <Footer></Footer>
  <SiteManager
    :displayNav="displayNavMobile"
    @openModalDownload="isDisplayModal = true"
  />
  <BackToTop></BackToTop>
  <ModalDownload
    :isDisplay="isDisplayModal"
    @closeModalDownload="isDisplayModal = false"
  />
</template>

<script setup>
import { onMounted, defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import WidgetLink from "./components/WidgetLink.vue";
import ListWork from "./components/ListWork.vue";
import ModalDownload from "./components/ModalDownload.vue";

const Header = defineAsyncComponent(() =>
  import("./components/HeaderComp.vue")
);

const BackToTop = defineAsyncComponent(() =>
  import("./components/BackToTop.vue")
);

const Footer = defineAsyncComponent(() =>
  import("./components/FooterComp.vue")
);

const MostContent = defineAsyncComponent(() =>
  import("./components/MostContent.vue")
);

const SiteManager = defineAsyncComponent(() =>
  import("./components/SiteManager.vue")
);

const Calender = defineAsyncComponent(() =>
  import("./components/CalenderComp.vue")
);

const Leader = defineAsyncComponent(() =>
  import("./components/LeaderComp.vue")
);

const isDisplayModal = ref(false);

const route = useRoute();

const displayNavMobile = ref(true);
let lastScrollY = window.scrollY;
onMounted(() => {
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // Kiểm tra điều kiện hiển thị nav
    if (currentScroll === 0 || currentScroll >= maxScroll) {
      // Hiện nav nếu ở đầu hoặc cuối trang
      displayNavMobile.value = true;
    } else if (currentScroll < lastScrollY) {
      // Hiện nav khi cuộn lên
      displayNavMobile.value = true;
    } else {
      // Ẩn nav khi cuộn xuống
      displayNavMobile.value = false;
    }

    // Cập nhật giá trị scrollY cho lần cuộn tiếp theo
    lastScrollY = currentScroll;
  });
});
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
