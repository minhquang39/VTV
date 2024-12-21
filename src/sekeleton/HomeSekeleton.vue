<template>
  <div class="flex flex-col md:flex-row relative flex-wrap">
    <!-- Header Section -->
    <div class="w-screen md:w-8/12 md:pr-2 p-2">
      <!-- Big post skeleton -->
      <div class="space-y-4">
        <div class="h-64 bg-gray-200 animate-pulse rounded-md"></div>
        <div class="h-8 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
        <div class="h-4 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
      </div>
    </div>

    <!-- 2 small news -->
    <div class="w-screen md:w-4/12 md:pl-2">
      <div v-for="n in 2" :key="n" class="p-2">
        <div class="space-y-4">
          <div class="h-40 bg-gray-200 animate-pulse rounded-md"></div>
          <div class="h-6 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
          <div class="h-4 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
        </div>
      </div>
    </div>

    <!-- Category Sections -->
    <div v-for="n in 6" :key="`category-${n}`" class="w-full md:w-6/12 p-2">
      <!-- Category title -->
      <div class="h-8 bg-gray-200 animate-pulse rounded-md w-1/3 mb-4"></div>

      <div class="flex flex-col md:flex-row">
        <!-- Big post -->
        <div class="w-full md:w-6/12 md:mr-2">
          <div class="space-y-4">
            <div class="h-48 bg-gray-200 animate-pulse rounded-md"></div>
            <div class="h-6 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
            <div class="h-4 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
          </div>
        </div>

        <!-- Small posts -->
        <div class="w-full md:w-6/12 md:pl-2">
          <div v-for="i in 4" :key="`small-${i}`">
            <div class="flex py-3 border-b border-gray-200 gap-2">
              <div class="w-4/12 md:w-6/12">
                <div class="h-20 bg-gray-200 animate-pulse rounded-md"></div>
              </div>
              <div class="w-8/12 md:w-6/12">
                <div class="h-16 bg-gray-200 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
