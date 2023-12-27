<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import mainhead from './components/header.vue'
import temprecipes from './components/baserecipes.vue'
import categories from './components/categories.vue'

</script>

<template >
  <main class="flex flex-col  gap-4 sm:px-[12px] xl:">
    <mainhead />
    <section class="flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14 ">
      <div class="flex flex-col  sm:w-full lg:w-[35%] gap-3 sm:gap-6">
        <div class="text-white text-[24px]  cathead flex justify-left items-center">Categories</div>
        <Suspense>
          <template #default>
            <categories /> 
          </template>
        </Suspense>

      </div>
      <!-- <div class="flex justify-between lg:w-[73%]">
        <div class=" relative">
          <input type="text" placeholder="Search recipes and more..."  class="border border-[#394150]  px-24  py-3 bg-transparent placeholder:text-[#394150] text-white rounded-full  ">
          <img src="./assets/Search.svg" alt="" srcset="" class="absolute top-3 left-4">
        </div>
        <div class="bg-white rounded-full px-6 py-3 h-12 ">
          <div>sort by :name</div>
        </div>
      </div> -->
      <div class="w-full flex flex-col gap-8">
        <div class=" flex justify-between  gap-3  text-[14px]">
          <div class=" relative  w-[60%]">
            <input type="text" placeholder="Search recipes and more..."  class="border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14 ">
            <img src="./assets/Search.svg" alt="" srcset="" class="absolute top-3 left-4">
          </div>
          <div class="relative flex  bg-white rounded-full  p-8 py-3 gap-2 h-12">
            <div class="hidden sm:block">sort by:</div>
            <!-- <img src="./assets/Expand_down.svg" alt="" srcset=""> -->
            <div class="flex">
              <button>Name</button>
              <img src="./assets/Expand_down.svg" alt="" srcset="">
            </div>
          </div>
          
        </div>
        <Suspense>
          <template #default>
            <temprecipes/> 
          </template>
        </Suspense>
        
        <!-- <div>search items in vue search.vue</div> -->
      </div>
      
      
      
    </section>
    
    
  </main>
  
    
  

  
  
</template>

<style>
.cathead{
  font-family: 'Playfair Display', serif;
}

</style>
