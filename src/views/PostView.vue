<template>
  <div v-if="postContent" class="py-12 pr-8">
    <h3
      class="text-xl font-bold text-[#111] uppercase hover:text-textHover border-b-[3px] border-mainMenu"
    >
      {{ postContent?.category_name }}
    </h3>

    <div class="flex justify-center">
      <div class="w-10/12">
        <h2 class="my-6 text-[#33332F] text-2xl font-semibold leading-10">
          {{ postContent?.title }}
        </h2>
        <p class="mb-3 text-[#111111] text-sm font-semibold">
          {{ postContent?.author }}
          <span v-if="photoBy">- Ảnh: {{ photoBy }}</span>
          <span class="text-[#8b8b8b]"> đã đăng lúc</span>
          {{ postContent?.time }} - {{ postDate }}
        </p>
        <div v-html="postContent?.content"></div>
        <div class="flex text-xs text-[#8d8d8d] gap-x-3">
          <div class="flex gap-x-1">
            <span
              ><svg
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
            <span>{{ dayjs().from(dayjs(postContent?.date)) }}</span>
          </div>
          <div class="flex gap-x-1">
            <span
              ><svg
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
            <span>{{ postContent?.views }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const route = useRoute();
const postContent = ref(null);
const photoBy = ref(null);
const postDate = ref(null);

const fetchData = async (id) => {
  try {
    const res = await fetch("/data/allpost.json");
    const data = await res.json();

    postContent.value = data.find((post) => post.id === parseInt(id));
    if (postContent.value) {
      photoBy.value = postContent.value.photoBy;
      postDate.value = new Date(postContent.value.date).toLocaleDateString(
        "vi",
        "VN"
      );
    } else {
      console.error(`Post with ID ${id} not found`);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

onMounted(() => {
  console.log("Mounted with route.params.id:", route.params.id);
  fetchData(route.params.id); // Fetch dữ liệu ban đầu
});

watch(
  () => route.params.id, // Watch tham số id trong route
  (newId) => {
    console.log("Route ID changed:", newId);
    if (newId) fetchData(newId);
  }
);
</script>
