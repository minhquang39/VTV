<template>
  <div>
    <!-- Video content  -->
    <h3
      class="pb-3 mb-[10px] text-xl font-bold text-[#111] uppercase hover:text-textHover border-b-[3px] border-mainMenu"
    >
      {{ postContent?.category_name }}
    </h3>
    <div class="flex flex-col md:flex-row">
      <div
        class="video-container w-full md:w-8/12 md:pr-[10px]"
        v-if="postContent?.mp4"
      >
        <iframe
          :src="`https://www.youtube.com/embed/${idVideo}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full aspect-video"
        ></iframe>

        <div class="mt-2">
          <h2 class="text-xl hover:text-textHover">{{ postContent?.title }}</h2>
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
        <p>{{ postContent?.content }}</p>
        <b class="block text-right">{{ postContent?.author }}</b>
      </div>
      <div class="md:w-4/12 md:pl-[10px]">
        <router-link
          v-for="(news, index) in subVideoList"
          :key="index"
          :to="{ path: `/post/${news.id}` }"
        >
          <div
            class="flex pb-[13px] mb-[7px]"
            :class="{ 'border-b border-[#505050]': index !== 3 }"
          >
            <img :src="news?.thumbnail" alt="" class="w-4/12 md:w-6/12" />
            <p class="pl-[10px] w-8/12 md:w-6/12 line-clamp-2">
              {{ news?.title }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- Video container  -->
    <div class="md:mt-16 mb-10">
      <h3
        class="pb-3 mb-[10px] text-xl font-bold text-[#111] uppercase border-b-[3px] border-mainMenu"
      >
        Danh sách video
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-5">
        <router-link
          v-for="(video, index) in videoList"
          :key="index"
          :to="{
            path: `/post/${video.id}`,
          }"
        >
          <div class="group overflow-hidden cursor-pointer mb-[20px] md:m-0">
            <div class="overflow-hidden">
              <img
                :src="video?.thumbnail"
                alt=""
                class="group-hover:scale-[1.05] transition-all duration-300 ease-linear md:h-[162px] object-cover object-center"
              />
            </div>
            <div class="px-[10px] py-[15px] bg-[#e0e1e5]">
              <p class="mb-[10px] group-hover:text-textHover line-clamp-2">
                {{ video?.title }}
              </p>
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
                  <span>{{ dayjs().from(dayjs(video?.date)) }}</span>
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
                  <span>{{ video?.views }}</span>
                </div>
              </div>
            </div>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, watchEffect } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const props = defineProps({
  postContent: {
    type: Object,
    required: true,
  },
  photoBy: String,
  postDate: String,
});

// const idVideo = ref(props.postContent?.mp4.split('v=')[1]);
const extractYouTubeId = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(regex);
  return match ? match[1] : null;
};

const idVideo = ref(extractYouTubeId(props.postContent?.mp4));
const videoList = ref(null);
const subVideoList = ref(null);

const fetchData = async () => {
  try {
    const res = await fetch('/data/category/video.json');
    const data = await res.json();

    videoList.value = data;
    subVideoList.value = data.slice(0, 4);
  } catch (error) {
    console.log(error);
  }
};

watchEffect(() => {
  idVideo.value = extractYouTubeId(props.postContent?.mp4);
});

onMounted(() => {
  fetchData();
});
</script>
