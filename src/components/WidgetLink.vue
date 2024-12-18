<template>
  <div class="w-full">
    <h1 class="text-[#043b7a] text-xl uppercase font-semibold">
      Liên kết website
    </h1>
    <div class="w-full my-3">
      <select
        name=""
        id=""
        class="py-2 text-sm w-full bg-[#eff0f1] border border-[#d8d5d5] focus:outline-none"
        @change="handleDirectLink($event)"
      >
        <option :value="link.path" v-for="link in links" :key="link.path">
          {{ link.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const handleDirectLink = (e) => {
  window.open(e.target.value, '_blank');
};

const links = ref([
  {
    title: '- Liên kết website các cơ quan, đơn vị -',
    path: '',
  },
  { title: 'Chính phủ', path: 'https://chinhphu.vn/' },
  { title: 'Quốc hội', path: 'https://quochoi.vn/Pages/default.aspx' },
  { title: 'Đảng cộng sản Việt Nam', path: 'https://dangcongsan.vn/' },
  { title: 'Bộ Quốc Phòng', path: 'http://www.mod.gov.vn/' },
  { title: 'Bộ Công An', path: 'https://mps.gov.vn/' },
  { title: 'Bộ Ngoại giao', path: 'https://www.mofa.gov.vn/vi/' },
  { title: 'Bộ Nội Vụ', path: 'https://www.moha.gov.vn/' },
  {
    title: 'Bộ Khoa học và Công nghệ',
    path: 'https://www.most.gov.vn/vn/Pages/Trangchu.aspx',
  },
  { title: 'Bộ Giao thông vận tải', path: 'http://www.mt.gov.vn/' },
  { title: 'Bộ Kế hoạch và Đầu tư', path: 'http://www.mpi.gov.vn/' },
  { title: 'Bộ Thông tin và Truyền Thông', path: 'https://mic.gov.vn/' },
  { title: 'Bộ Công Thương', path: 'http://moit.gov.vn/' },
  {
    title: 'Bộ Nông nghiệp và Phát triển Nông thôn',
    path: 'https://www.mard.gov.vn/Pages/default.aspx',
  },
  {
    title: 'Bộ Tài Chính',
    path: 'https://mof.gov.vn/webcenter/portal/btcvn',
  },
  {
    title: 'Bộ Xây Dựng',
    path: 'http://www.xaydung.gov.vn/vn/Pages/Trangchu.aspx',
  },
  { title: 'Bộ Y Tế', path: 'https://moh.gov.vn/' },
  {
    title: 'Bộ Giáo dục và Đào tạo',
    path: 'https://moet.gov.vn/Pages/home.aspx',
  },
  { title: 'Bộ Tài nguyên và Môi trường', path: 'https://monre.gov.vn/' },
  { title: 'Bộ Văn hóa Thể thao và Du lịch', path: 'https://bvhttdl.gov.vn/' },
  {
    title: 'Bộ Tư Pháp',
    path: 'https://moj.gov.vn/Pages/home.aspx',
  },
  { title: 'Thanh tra Chính Phủ', path: 'https://thanhtra.gov.vn/' },
  { title: 'Văn phòng Chính Phủ', path: 'https://thanhtra.gov.vn/' },
  { title: 'Ngân hàng nhà nước Việt Nam', path: 'https://thanhtra.gov.vn/' },
  { title: 'Ủy ban dân tộc', path: 'https://thanhtra.gov.vn/' },
  { title: 'TP Hà Nội', path: 'https://thanhtra.gov.vn/' },
  { title: 'TP Hồ Chí Minh', path: 'https://thanhtra.gov.vn/' },
  { title: 'TP Cần Thơ', path: 'https://thanhtra.gov.vn/' },
]);
</script>
