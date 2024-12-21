<template>
  <CategorySekeleton v-if="isLoading" />
  <div
    class="flex flex-col md:flex-row px-2 md:px-[10px]"
    v-if="categoryData && !isLoading"
  >
    <div class="w-full md:w-8/12 md:pr-[10px]">
      <h2
        class="text-xl uppercase font-bold py-2 border-b-[3px] border-[#07356a] hover:text-textHover cursor-pointer"
      >
        {{ categoryData?.title }}
      </h2>
      <div class="mt-2">
        <!-- Big post  -->
        <router-link
          v-for="(post, index) in toBeShow"
          :key="post.id"
          :to="{ path: `post/${post.id}` }"
        >
          <div
            class="mt-[15px] md:pt-[35px] pb-[10px] border-t border-[#B0A8A8]"
            :class="index === 0 || index === 1 ? 'border-none' : ''"
          >
            <h2
              class="text-[19px] font-bold text-[#07356a] hover:text-textHover cursor-pointer mb-[20px]"
            >
              {{ post?.title }}
            </h2>
            <div
              class="flex flex-col md:flex-row"
              :class="index === 0 ? 'md:flex-col' : 'flex-row'"
            >
              <div
                :class="
                  (index !== 0 ? 'pr-[10px]' : '',
                  index === 0 ? 'md:w-full' : 'md:w-6/12')
                "
              >
                <img :src="post?.thumbnail" alt="" />
              </div>
              <div :class="index === 0 ? 'w-full' : 'pl-[10px] md:w-6/12'">
                <div class="flex text-xs text-[#8d8d8d] gap-x-3 pt-[10px]">
                  <div class="flex gap-x-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    <span>{{ dayjs().from(dayjs(post?.date)) }}</span>
                  </div>
                  <div class="flex gap-x-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </span>
                    <span>{{ post?.views }}</span>
                  </div>
                </div>
                <p
                  class="text-[#555] text-sm pt-[10px]"
                  :class="index === 0 ? '' : 'md:w-[85]'"
                >
                  {{ post?.description }}
                </p>
              </div>
            </div>
          </div></router-link
        >
      </div>
      <button
        class="flex bg-[#8b8b8b] text-white hover:bg-textHover px-[15px] py-[5px] uppercase text-[15px] rounded-md mt-5"
        @click="showMore"
        v-show="currentPage !== totalPage"
      >
        Xem thêm
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
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="w-full md:w-4/12 md:px-[10px]">
      <div class="" v-if="categoryData.mostLike">
        <h2
          class="text-xl uppercase font-bold py-2 border-b-[3px] border-[#07356a] hover:text-textHover cursor-pointer"
        >
          Bài viết xem nhiều
        </h2>
        <div class="mt-2">
          <!-- Most comment  -->
          <router-link
            v-for="(post, index) in categoryData.mostLike"
            :key="post.id"
            :to="{
              path: `/post/${post.id}`,
            }"
          >
            <div
              class="flex py-[10px] mb-[14px] border-b border-[#B0A8A8]"
              :class="{
                'border-none': index === categoryData.mostLike.length - 1,
              }"
            >
              <div class="w-4/12 md:w-6/12">
                <img :src="post.thumbnail" alt="" />
              </div>
              <p
                class="w-8/12 md:w-6/12 ml-2 line-clamp-4 font-bold text-sm text-[#555]"
              >
                {{ post.title }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="" v-if="categoryData.mostComment">
        <h2
          class="text-xl uppercase font-bold py-2 border-b-[3px] border-[#07356a] hover:text-textHover cursor-pointer"
        >
          Bài viết nhiều comment
        </h2>
        <div class="mt-2">
          <!-- Most comment  -->
          <router-link
            v-for="(post, index) in categoryData.mostComment"
            :key="post.id"
            :to="{
              path: `/post/${post.id}`,
            }"
          >
            <div
              class="flex py-[10px] mb-[14px] border-b border-[#B0A8A8]"
              :class="{
                'border-none': index === categoryData.mostComment.length - 1,
              }"
            >
              <div class="w-4/12 md:w-6/12">
                <img :src="post.thumbnail" alt="" />
              </div>
              <p
                class="w-8/12 md:w-6/12 ml-2 line-clamp-4 font-bold text-sm text-[#555]"
              >
                {{ post.title }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mx-2 md:hidden">
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
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
  watchEffect,
  defineAsyncComponent,
} from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import WidgetLink from '../components/WidgetLink.vue';
import ListWork from '../components/ListWork.vue';
import CategorySekeleton from '@/sekeleton/CategorySekeleton.vue';
const Calender = defineAsyncComponent(() =>
  import('../components/CalenderComp.vue')
);

const isLoading = ref(false);
// Route
const route = useRoute();
const categoryId = ref('');

// Data
const categoryData = ref(null);

const currentPage = ref(1);
const postPerPage = ref(4);
const totalPage = computed(() =>
  Math.ceil(categoryData.value.content.length / postPerPage.value)
);

const toBeShow = computed(() =>
  categoryData.value.content.slice(0, currentPage.value * postPerPage.value)
);

const showMore = () => {
  if (currentPage.value === totalPage.value) return;
  currentPage.value++;
};

// Fetch DAta
const fetchData = async (id) => {
  try {
    isLoading.value = true;
    const res = await fetch(`/data/category/${id}.json`);
    categoryData.value = await res.json();
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

onMounted(() => {
  categoryId.value = route.params.category;

  fetchData(categoryId.value);
});

watchEffect(() => {
  categoryId.value = route.params.category;
  fetchData(categoryId.value);
});
</script>
