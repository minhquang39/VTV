<template>
  <Suspense>
    <template #default>
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
              <big-new
                :isBigNew="false"
                :data="news"
                :direction="true"
              ></big-new>
            </router-link>
          </div>
        </div>
        <div class="mx-2 md:hidden">
          <div class="my-2 md:hidden">
            <Calender />
          </div>
          <div class="my-2 md:hidden">
            <img src="/images/lichtiepdan.jpg" alt="" />
          </div>
        </div>
        <!-- Tin tức sự kiện  -->
        <div class="w-full p-2 md:w-6/12" v-if="post1">
          <h2
            class="py-2 uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu mb-4 hover:text-textHover cursor-pointer"
          >
            Tin tức - sự kiện
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/3"
                ><big-new :isBigNew="true" :data="post1[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post1.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post1.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- VTV với khán giả  -->
        <div class="w-full md:w-6/12 p-2" v-if="post2">
          <h2
            class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
          >
            VTV với khán giả
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/8"
                ><big-new :isBigNew="true" :data="post2[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post2.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post1.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Hợp tác quốc tế  -->
        <div class="w-full md:w-6/12 p-2" v-if="post3">
          <h2
            class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
          >
            Hợp tác quốc tế
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/12"
                ><big-new :isBigNew="true" :data="post3[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post3.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post3.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- VTV vì cộng đồng -->
        <div class="w-full md:w-6/12 p-2" v-if="post4">
          <h2
            class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
          >
            VTV - Vì cộng đồng
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/17"
                ><big-new :isBigNew="true" :data="post4[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post4.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post3.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Chuyển đổi số -->
        <div class="w-full md:w-6/12 p-2" v-if="post5">
          <h2
            class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
          >
            Chuyển đổi số
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/22"
                ><big-new :isBigNew="true" :data="post5[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post5.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post5.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Công tác đoàn thể -->
        <div class="w-full md:w-6/12 p-2" v-if="post5">
          <h2
            class="uppercase text-xl text-[#111] font-semibold border-b-[3px] border-mainMenu py-2 mb-4 hover:text-textHover cursor-pointer"
          >
            Công tác đoàn thể
          </h2>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-6/12 md:mr-2">
              <router-link to="/post/22"
                ><big-new :isBigNew="true" :data="post6[0]" :direction="true"
              /></router-link>
            </div>
            <div class="w-full md:w-6/12 md:pl-2">
              <div v-for="(news, index) in post6.slice(1)" :key="news.id">
                <router-link :to="{ path: `/post/${news.id}` }">
                  <div
                    class="flex py-3 border-b border-[#ccc] md:border-black gap-2"
                    :class="{
                      'border-none': index === post6.slice(1).length - 1,
                    }"
                  >
                    <div class="w-4/12 md:w-6/12">
                      <img :src="news.thumbnail" class="w-full h-full" />
                    </div>
                    <div
                      class="w-8/12 md:w-6/12 line-clamp-3 h-full text-sm font-semibold"
                    >
                      <span class="hover:text-textHover">{{ news.title }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
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
    <template #fallback>
      <SekeletonComp />
    </template>
  </Suspense>
</template>

<script setup>
import BigNew from "@/components/BigNew.vue";
import { ref, defineAsyncComponent } from "vue";
import { onMounted } from "vue";
import WidgetLink from "../components/WidgetLink.vue";
import ListWork from "../components/ListWork.vue";
import SekeletonComp from "@/components/SekeletonComp.vue";

const Calender = defineAsyncComponent(() =>
  import("../components/CalenderComp.vue")
);

const isLoading = ref(false);
const postData = ref(null);
const urls = ref([
  "./data/main.json",
  "./data/tintucsukien.json",
  "./data/vtvvoikhangia.json",
  "./data/hoptacquocte.json",
  "./data/vtvvicongdong.json",
  "./data/chuyendoiso.json",
  "./data/congtacdoanthe.json",
]);

const fetchAll = async () => {
  try {
    const responses = await Promise.all(urls.value.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    postData.value = data;
    [
      post.value,
      post1.value,
      post2.value,
      post3.value,
      post4.value,
      post5.value,
      post6.value,
    ] = postData.value;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

const post = ref("");
const post1 = ref("");
const post2 = ref("");
const post3 = ref("");
const post4 = ref("");
const post5 = ref("");
const post6 = ref("");
onMounted(async () => {
  fetchAll();
});
</script>
