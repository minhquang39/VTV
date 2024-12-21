<template>
  <PostSekeleton v-if="isLoading"></PostSekeleton>
  <div v-if="postContent && !isLoading" class="py-4 px-3 md:py-0 md:pr-8">
    <component
      :is="type === 'default' ? DefaultLayout : VideoLayout"
      :post-content="postContent"
      :photo-by="photoBy"
      :post-date="postDate"
    ></component>
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
import { ref, onMounted, watch, defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import PostSekeleton from '@/sekeleton/PostSekeleton.vue';
import DefaultLayout from '../layout/DefaultLayout.vue';
import VideoLayout from '../layout/VideoLayout.vue';
import WidgetLink from '../components/WidgetLink.vue';
import ListWork from '../components/ListWork.vue';

const Calender = defineAsyncComponent(() =>
  import('../components/CalenderComp.vue')
);

const route = useRoute();
const postContent = ref(null);
const photoBy = ref(null);
const postDate = ref(null);
const isLoading = ref(false);

const type = computed(() => postContent.value?.type || 'default');

const fetchData = async (id) => {
  try {
    isLoading.value = true;
    const res = await fetch('/data/allpost.json');
    const data = await res.json();
    postContent.value = data.find((post) => post.id === parseInt(id));
    if (postContent.value) {
      photoBy.value = postContent.value.photoBy;
      postDate.value = new Date(postContent.value.date).toLocaleDateString(
        'vi',
        'VN'
      );
    } else {
      console.error(`Post with ID ${id} not found`);
    }
  } catch (err) {
    console.error('Error fetching data:', err);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

onMounted(() => {
  fetchData(route.params.id); // Fetch dữ liệu ban đầu
  window.scrollTo({ top: 0, behavior: 'auto' });
});

watch(
  () => route.params.id, // Watch tham số id trong route
  (newId) => {
    if (newId) fetchData(newId);
  }
);
</script>
