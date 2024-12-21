<template>
  <div class="flex flex-col md:flex-row px-2 md:px-[10px]">
    <!-- Main content -->
    <div class="w-full md:w-8/12 md:pr-[10px]">
      <!-- Category title -->
      <div class="h-8 bg-gray-200 animate-pulse rounded-md w-1/3 mb-4"></div>

      <!-- Featured post -->
      <div class="space-y-4 mb-8">
        <div class="h-8 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
        <div class="h-72 bg-gray-200 animate-pulse rounded-md"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-200 animate-pulse rounded-md w-1/4"></div>
          <div class="h-16 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>

      <!-- Secondary posts -->
      <div v-for="n in 4" :key="n" class="border-t border-gray-100 py-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-6/12">
            <div class="h-48 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
          <div class="md:w-6/12 space-y-4">
            <div class="h-6 bg-gray-200 animate-pulse rounded-md"></div>
            <div class="h-4 bg-gray-200 animate-pulse rounded-md w-1/4"></div>
            <div class="h-20 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>

      <!-- Load more button -->
      <div class="h-10 bg-gray-200 animate-pulse rounded-md w-32 mt-6"></div>
    </div>

    <!-- Sidebar -->
    <div class="w-full md:w-4/12 md:px-[10px] space-y-8">
      <!-- Most viewed section -->
      <div>
        <div class="h-8 bg-gray-200 animate-pulse rounded-md w-2/3 mb-4"></div>
        <div class="space-y-4">
          <div v-for="n in 3" :key="n" class="flex gap-4">
            <div class="w-4/12 md:w-6/12">
              <div class="h-20 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div class="w-8/12 md:w-6/12">
              <div class="h-16 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Most commented section -->
      <div>
        <div class="h-8 bg-gray-200 animate-pulse rounded-md w-2/3 mb-4"></div>
        <div class="space-y-4">
          <div v-for="n in 3" :key="n" class="flex gap-4">
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
</template>
