<template>
  <div class="w-full">
    <!-- Top  -->
    <div class="bg-[#07356a] flex p-2 rounded-t-[15px]">
      <!-- Left  -->
      <div>
        <div class="flex cursor-pointer gap-x-3" @click="toggleShowDate">
          <img
            src="https://vtv.gov.vn/themes/viettelfamily/images/work.png"
            alt=""
          />
          <span class="text-xl font-normal text-white hover:text-textHover"
            >Lịch phát sóng</span
          >
        </div>
        <!-- <div>
          <vue-cal
            v-show="showDate"
            class="vuecal--rounded-theme vuecal--green-theme"
            xsmall
            hide-view-selector
            :time="false"
            active-view="month"
            :disable-views="['week']"
            style="width: 270px; height: 300px"
          >
          </vue-cal>
        </div> -->
      </div>
      <!-- Right -->
      <div class="flex ml-5">
        <div class="relative group w-full">
          <div>
            <img :src="channels[channelId].path" alt="" class="w-16" />
          </div>
          <div class="absolute hidden group-hover:block bg-[#ccc]">
            <div
              v-for="(channel, id) in channels"
              :key="id"
              v-show="id !== channelId"
              class="p-2"
              @click="handleSelectChannel(id)"
            >
              <img :src="channel.path" alt="" class="w-16" />
            </div>
          </div>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>
      </div>
    </div>
    <!-- Body  -->
    <div class="rounded-b-[15px] bg-[#EEF3FA] flex justify-between">
      <div
        class="flex flex-col text-center w-[calc(100%/7)]"
        v-for="index in 7"
        :key="index"
        :class="index === currentDateIdx ? 'bg-[#AACCFA] text-[#3480eb]' : ''"
        @click="handleChangeCalendar(index)"
      >
        <!-- Hiển thị tên thứ -->
        <span class="text-[13px] font-bold">{{
          index === 7 ? "CN" : `T${index + 1}`
        }}</span>

        <!-- Sử dụng index - 1 để đưa vào .day() -->
        <span class="text-[13px] font-bold">
          {{ dayjs().day(index).date() }}/12
        </span>
      </div>
    </div>
    <!-- Bot  -->
    <div
      class="rounded-[15px] bg-[#eff0f1] border-2 border-[#ccc] max-h-[360px] min-h-[50px] overflow-y-auto"
    >
      <!-- Loader If  -->
      <div v-if="!calendarContent">
        <div class="flex items-center justify-center h-auto">
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-transparent"
          ></div>
        </div>
      </div>
      <!-- Else  -->
      <div v-else>
        <div v-if="typeof calendarContent === 'object'">
          <div
            v-for="(content, index) in calendarContent"
            class="flex p-[10px] border-b border-dashed border-[#333]"
            :class="{ 'border-none': index === calendarContent.length - 1 }"
            :key="content.time"
          >
            <span class="font-bold text-sm ml-[5%]">{{ content.time }}</span>
            <div class="ml-[10%]">
              <p class="font-bold text-sm">{{ content.category }}</p>
              <span class="text-sm">{{ content?.title }}</span>
            </div>
          </div>
        </div>
        <!-- If don't have data  -->
        <div
          v-else
          class="text-xl font-normal flex items-center justify-center my-auto"
        >
          <p>Không có lịch</p>
        </div>
        <!-- If data  -->
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);
// import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { onMounted, ref } from "vue";

const currentDate = dayjs().day();
const currentDateIdx = ref(currentDate);
const calendarContent = ref();
const handleChangeCalendar = (index) => {
  currentDateIdx.value = index;
  handleLoadCalender(index);
};
//
const handleLoadCalender = async (index) => {
  const res = await fetch("/data/data-content.json");
  const data = await res.json();
  calendarContent.value = "";
  setTimeout(() => {
    calendarContent.value = data.find(
      (content) => content.id === index - 1
    ).content;
  }, 1000);
};
// Show date
const toggleShowDate = () => {
  showDate.value = !showDate.value;
};
const showDate = ref(false);

// Channel
const channelId = ref(0);

const handleSelectChannel = (id) => {
  channelId.value = id;
};
const channels = ref([
  {
    id: 0,
    path: "/images/channel/logo-vtv-1.png",
  },
  {
    id: 1,
    path: "/images/channel/logo-vtv-2.png",
  },
  {
    id: 2,
    path: "/images/channel/logo-vtv-3.png",
  },
  {
    id: 3,
    path: "/images/channel/logo-vtv-4.png",
  },
  {
    id: 4,
    path: "/images/channel/logo-vtv-5.png",
  },
  {
    id: 5,
    path: "/images/channel/logo-vtv-5-25.png",
  },
  {
    id: 6,
    path: "/images/channel/logo-vtv-7.png",
  },
  {
    id: 7,
    path: "/images/channel/logo-vtv-8.png",
  },
  {
    id: 8,
    path: "/images/channel/logo-vtv-9.png",
  },
  {
    id: 9,
    path: "/images/channel/logo-vtv-can-tho.png",
  },
]);

onMounted(() => {
  handleLoadCalender(currentDate - 1);
});
</script>
