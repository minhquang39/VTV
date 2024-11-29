<template>
  <header class="w-full relative">
    <!-- top -->
    <div
      class="bg-no-repeat bg-center bg-cover container-none px-2 md:px-20 xl:px-24"
      style="background-image: url('/images/bg-header.png')"
    >
      <!-- direct link  -->
      <ul
        class="flex gap-1 text-textGrayPrimary text-sm font-medium cursor-pointer py-2 justify-end w-full"
      >
        <li class="hover:text-textHover hidden sm:inline-block">Trang chủ |</li>
        <li class="hover:text-textHover">Liên hệ |</li>
        <li class="hover:text-textHover">Điều khoản và chính sách</li>
      </ul>
      <!-- body -->
      <div class="flex justify-between items-center pb-2">
        <!-- left -->
        <div class="flex items-center">
          <router-link to="/">
            <img
              src="/images/logo-vtv.png"
              alt=""
              class="w-24 h-16 md:w-auto md:h-auto"
          /></router-link>
          <div>
            <p
              class="uppercase text-[12px] font-medium md:text-lg text-[#c7c7c7]"
            >
              Cổng thông tin điện tử
            </p>
            <p
              class="uppercase text-[16px] font-semibold md:text-3xl text-[#e8e6e6]"
            >
              Đài truyền hình Việt Nam
            </p>
          </div>
        </div>
        <!-- right -->
        <div class="hidden md:flex items-center gap-2">
          <div
            class="flex p-1 shadow-customHeader border border-transparent bg-customBg rounded-lg"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-textGrayPrimary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </span>
            <span
              class="text-sm text-textGrayPrimary hover:text-textHover cursor-pointer"
              >Báo điện tử VTV</span
            >
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex items-center p-1 rounded-lg bg-white text-textBlue font-semibold"
          >
            <span
              ><svg
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>

            <span class="text-xs hover:text-textHover cursor-pointer">
              <span class="text-xs">HOTLINE</span> 02438355931</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- bot -->

    <div
      class="flex items-center justify-between px-1 md:px-4 xl:px-10 z-10"
      :class="
        isHiddenHeader
          ? 'fixed top-0 left-0 right-0 bg-[#0048a8]'
          : 'bg-[#0048a8] lg:bg-mainMenu'
      "
    >
      <div
        class="bg-customBg fixed lg:hidden bottom-0 top-0 left-0 right-0 z-50"
        @click="showNavOnMobile"
        v-if="showNavMobile"
      ></div>
      <!-- menu bar mobile  -->
      <div class="py-2 relative group">
        <!-- Nav on mobile  -->
        <ul
          class="absolute top-0 -left-2 md:top-8 md:-left-5 w-screen md:w-80 md:h-screen bg-[#105099] text-white md:hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-500 z-50 md:transform-none"
          :class="showNavMobile ? 'translate-x-0' : '-translate-x-full'"
        >
          <li class="border-b border-white hover:bg-white">
            <span
              class="hidden md:inline-block block p-3 hover:text-textHover hover:translate-x-10 transition-transform duration-300 cursor-pointer"
              >Giới thiệu</span
            >
            <span
              class="md:hidden uppercase block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer"
              >Trang chủ</span
            >
          </li>
          <li class="border-b border-white hover:bg-white">
            <span
              class="md:hidden uppercase block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer"
              >Giới thiệu</span
            >
          </li>

          <li class="border-b border-white hover:bg-white">
            <span
              class="block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case"
              >Tin tức - Sự kiện</span
            >
          </li>
          <li class="border-b border-white hover:bg-white">
            <span
              class="block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case"
              >Hợp tác quốc tế</span
            >
          </li>
          <li class="border-b border-white hover:bg-white">
            <span
              class="block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case"
              >VTV vì cộng đồng</span
            >
          </li>
          <li class="border-b border-white hover:bg-white hidden md:block">
            <span
              class="p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case hidden md:block"
              >VTV với khán giả</span
            >
          </li>
          <li class="border-b border-white hover:bg-white hidden md:block">
            <span
              class="p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case hidden md:block"
              >Bản tin Magazine</span
            >
          </li>
          <li
            class="border-b border-white hover:bg-white md:hover:bg-[#105099] flex items-center justify-between h-full"
            @click="showSubMenu = !showSubMenu"
          >
            <span
              class="block p-3 hover:text-textHover transition:none md:hover:translate-x-10 transition-transform duration-300 cursor-pointer uppercase md:normal-case"
              >VTV với khán giả
            </span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 font-bold md:hidden"
                :class="showSubMenu ? 'text-black' : 'text-white'"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="
                    !showSubMenu
                      ? 'm8.25 4.5 7.5 7.5-7.5 7.5'
                      : 'm19.5 8.25-7.5 7.5-7.5-7.5'
                  "
                />
              </svg>
            </span>
          </li>

          <!-- Sub menu  -->
          <ul
            class="absolute uppercase md:hidden w-screen bg-white p-2 z-0"
            v-if="showSubMenu"
          >
            <li class="hover:text-textHover text-black">Chương trình mới</li>
            <li class="hover:text-textHover text-black">
              Đăng ký tham giam chương trình
            </li>
          </ul>
        </ul>
        <span @click="showNavOnMobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 xl:size-7 text-white cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>
      <!-- list navbar desktop center  -->
      <ul
        class="hidden md:flex xl:mr-28 uppercase text-white text-sm font-normal gap-1"
      >
        <li
          class="px-3 py-3 hover:bg-white hover:text-textHover cursor-pointer"
        >
          Trang chủ
        </li>
        <li
          class="px-3 py-3 hover:bg-white hover:text-textHover cursor-pointer"
        >
          Giới thiệu
        </li>
        <li
          class="px-3 py-3 hover:bg-white hover:text-textHover cursor-pointer"
        >
          Tin tức - sự kiện
        </li>
        <li
          class="px-3 py-3 hover:bg-white hover:text-textHover cursor-pointer"
        >
          Hợp tác quốc tế
        </li>
        <li
          class="px-3 py-3 hover:bg-white hover:text-textHover cursor-pointer"
        >
          VTV vì cộng đồng
        </li>
        <li
          class="relative group flex items-center origin-top"
          @mouseover="showSubMenuDesktop = true"
          @mouseleave="showSubMenuDesktop = false"
        >
          <a
            href="#"
            class="hover:bg-white hover:text-textHover cursor-pointer block h-full px-3 py-3"
            >VTV với khán giả</a
          >
          <ul
            class="absolute left-0 top-10 w-72 shadow-subMenu px-3 hidden group-hover:block origin-top scale-0 group-hover:scale-100 transition-transform duration-300 z-50 bg-white"
          >
            <li
              class="uppercase text-black py-2 lg:hover:translate-x-5 duration-300 lg:hover:text-textHover"
            >
              Chương trình mới
            </li>
            <li
              class="uppercase text-black py-2 lg:hover:translate-x-5 duration-300 lg:hover:text-textHover"
            >
              Đăng ký tham gia chương trình
            </li>
          </ul>
          <span
            ><svg
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
                :d="
                  showSubMenuDesktop
                    ? 'm8.25 4.5 7.5 7.5-7.5 7.5'
                    : 'm19.5 8.25-7.5 7.5-7.5-7.5'
                "
              />
            </svg>
          </span>
        </li>
      </ul>
      <!-- navbar right  -->
      <div class="flex items-center md:justify-between gap-3 xl:mr-8">
        <!-- app vtv  -->

        <Menu as="div" class="relative inline-block">
          <div>
            <MenuButton
              class="flex bg-[#0048a8] p-1 rounded-md hover:bg-mainMenu hover:border hover:border-textHover hover:rounded-md text-textGrayPrimary hover:text-white cursor-pointer"
            >
              <span
                ><svg
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
              <span class="text-sm">Ứng dụng VTV</span>
              <span
                ><svg
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-0 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div
                class="p-2 border-b border-dashed border-[#ccc] hover:bg-[#eee]"
                v-for="appIcon in appIcons"
                :key="appIcon.path"
              >
                <MenuItem>
                  <a href="" class="flex gap-x-2">
                    <img :src="appIcon.path" alt="" class="w-10 h-10" />
                    <div>
                      <p class="text-[#111111] text-xs">Ứng dụng</p>
                      <span class="text-[#111111] text-xs font-semibold">{{
                        appIcon.name
                      }}</span>
                    </div>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <!-- button login  -->
        <button
          class="flex items-center gap-1 p-1 cursor-pointer hover:bg-white hover:rounded-sm group"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white group-hover:text-textHover hidden md:inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
          <span
            class="font-semibold text-white text-base group-hover:text-textHover"
            >Đăng nhập</span
          >
        </button>
        <!-- icon search  -->
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-white cursor-pointer hover:text-textHover hidden md:inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { onMounted, ref } from "vue";

const showNavMobile = ref(false);
const showSubMenu = ref(false);
const showSubMenuDesktop = ref(false);
const isHiddenHeader = ref(false);

const appIcons = [
  { path: "/images/logo-app/logo-app-vtvnews.png", name: "VTV News" },
  { path: "/images/logo-app/logo-app-vtvgo.jpg", name: "VTVGo" },
  { path: "/images/logo-app/logo-app-vtv-giai-tri.jpg", name: "VTV Giải Trí" },
  { path: "/images/logo-app/logo-app-vtvcab-on.png", name: "VTVCab ON" },
  { path: "/images/logo-app/logo-app-k-plus.png", name: "myK+" },
  { path: "/images/logo-app/logo-app-sctv.png", name: "SCTV Online" },
  { path: "/images/logo-app/vtv-family.png", name: "VTV Family ADR" },
  { path: "/images/logo-app/vtv-family.png", name: "VTV Family IOS" },
];

const showNavOnMobile = () => {
  showNavMobile.value = !showNavMobile.value;
  showSubMenu.value = false;
};

onMounted(() => {
  document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      isHiddenHeader.value = true;
    } else {
      isHiddenHeader.value = false;
    }
  };
});
</script>
