<template>
  <div class="flex flex-col md:flex-row relative flex-wrap">
    <!-- Big New -->
    <div class="w-screen md:w-8/12 md:pr-2 p-2">
      <router-link to="/post/0"
        ><big-new :isBigNew="true" :data="post[0]" :direction="true"
      /></router-link>
    </div>
    <!-- 2 small news  -->
    <div class="w-screen md:w-4/12 md:pl-2">
      <div v-for="news in post.slice(1)" :key="news.id" class="p-2">
        <router-link :to="{ path: `/post/${news.id}` }">
          <big-new :isBigNew="false" :data="news" :direction="true"></big-new>
        </router-link>
      </div>
    </div>
    <!-- Tin tức sự kiện  -->
    <div class="w-screen md:w-6/12 md:pr-2 p-2" v-if="post1">
      <h2
        class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
      >
        Tin tức - sự kiện
      </h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-screen md:w-6/12 md:mr-2">
          <router-link to="/post/3"
            ><big-new :isBigNew="true" :data="post1[0]" :direction="true"
          /></router-link>
        </div>
        <div class="w-screen md:w-6/12 md:pl-2">
          <div v-for="(news, index) in post1.slice(1)" :key="news.id">
            <router-link :to="{ path: `/post/${news.id}` }">
              <div
                class="flex py-3 border-b border-black gap-2"
                :class="{ 'border-none': index === post1.slice(1).length - 1 }"
              >
                <div class="w-6/12">
                  <img :src="news.thumbnail" class="w-full h-full" />
                </div>
                <div class="w-6/12 line-clamp-3 text-sm font-semibold">
                  {{ news.title }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BigNew from "@/components/BigNew.vue";
import { ref } from "vue";
import { onMounted } from "vue";

const post = ref("");
const post1 = ref("");

onMounted(async () => {
  // fetch("./data/main.json ")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     post.value = data;
  //   });

  post.value = await (await fetch("./data/main.json")).json();
  post1.value = await (await fetch("./data/tintucsukien.json")).json();
});
</script>
