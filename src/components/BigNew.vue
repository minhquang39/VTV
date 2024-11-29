<template>
  <div
    class="container cursor-pointer relative flex"
    :class="props.direction == true ? 'flex-col' : 'flex-row'"
  >
    <img :src="props?.data?.thumbnail" alt="" class="w-screen" />
    <div class="">
      <p
        class="font-bold md:my-[10px] hover:text-textHover cursor-pointer line-clamp-3"
        :class="props.isBigNew ? 'text-[16px]' : 'text-[14px]'"
      >
        {{ props?.data?.title }}
      </p>
      <p class="md:mb-[10px] text-sm line-clamp-5">
        {{ props?.data?.description }}
      </p>
    </div>
  </div>
  <div class="flex text-xs text-textGrayPrimary gap-x-3" v-if="!props.isBigNew">
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
      <span>{{
        !props.isBigNew && dayjs().from(dayjs(props?.data?.date))
      }}</span>
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
      <span>{{ props?.data?.views }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015

dayjs.extend(relativeTime);

const props = defineProps({
  isBigNew: Boolean,
  data: Object,
  direction: Boolean,
});
</script>
