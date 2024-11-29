<template>
  <div class="container">
    <p
      class="uppercase font-bold text-lg text-center block relative after:w-6 after:h-1 after:bg-textHover after:absolute after:top-1/3 after:left-0 before:w-6 before:h-1 before:bg-textHover before:absolute before:top-1/3 before:right-0 hover:text-textHover cursor-pointer"
    >
      Lãnh đạo đài THVN
    </p>
    <div class="flex rounded-md bg-[#ededf6] h-32 mt-5 overflow-hidden">
      <div class="w-8/12 m-auto text-center">
        <p class="text-sm font-bold mb-2">{{ role }}</p>
        <p class="text-[16px] font-bold mb-2">{{ name }}</p>
      </div>
      <div
        class="w-4/12 bg-no-repeat bg-center bg-cover bg-origin-content"
        :style="{ backgroundImage: `url(${background})` }"
      ></div>
    </div>
    <div class="grid md:grid-cols-4 xl:grid-cols-5 mt-5 cursor-pointer">
      <div
        v-for="leader in leaders"
        :key="leader.id"
        class="rounded-full w-14 h-14"
        :class="leader.id === index ? ' border-2 border-mainMenu' : ''"
        @click="showInfoLeader(leader.id)"
      >
        <img :src="leader.path" alt="" class="rounded-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const leaders = ref([
  {
    id: 1,
    path: "/images/leader/3.jpg",
    name: "Nguyễn Thanh Lâm",
    role: "Tổng Giám đốc",
  },
  {
    id: 2,
    path: "/images/leader/2.jpg",
    name: "Đinh Đắc Vĩnh",
    role: "Phó Tổng Giám đốc",
  },
  {
    id: 3,
    path: "/images/leader/1.png",
    name: "Đỗ Thanh Hải",
    role: "Phó Tổng Giám đốc",
  },
  {
    id: 4,
    path: "/images/leader/5.png",
    name: "Đỗ Đức Hoàng",
    role: "Phó Tổng Giám đốc",
  },
  {
    id: 5,
    path: "/images/leader/4.jpg",
    name: "Lê Quyền",
    role: "Phó Tổng Giám đốc",
  },
]);
const index = ref(1);
const role = computed(() => leaders.value[index.value - 1].role);
const name = computed(() => leaders.value[index.value - 1].name);
const background = computed(() => leaders.value[index.value - 1].path);
const showInfoLeader = (id) => {
  index.value = id;
};
</script>
