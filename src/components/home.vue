<script setup>
import {ref, onMounted, onBeforeMount} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import mainhead from './header.vue'
import temprecipes from './baserecipes.vue'
import categories from './categories.vue'
let list1 = false
// let baseurl1 = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const search = ref("");
const items = ref([]);
const handle_search = () => {
    // items.value = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
    if (search.value != ""){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
        .then(response => response.json())
        .then(data => {
            items.value = data.meals.slice(0,20)
            search.value = ""
            // console.log(items.value)
        })
    }
    
}
let bro = true


</script>

<template >
  <main class="flex flex-col  gap-4 sm:px-[12px] 2xl:px-[16px]">
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

      <div class="w-full flex flex-col gap-8">
        <div class=" flex justify-between  gap-3  text-[14px]">
          <form class=" relative  w-[60%]" @submit.prevent="handle_search" @click="bro == false">
            <input type="text"  placeholder="Search recipes and more..." name="search-input"  class="border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14 " v-model="search">
            <img src="../assets/Search.svg" alt="" srcset="" class="absolute top-3 left-4">
          </form>
          <div class="relative flex justify-center items-center  bg-white rounded-full  p-8 py-3 gap-2 h-12 text-[#394150]">
            <div class="hidden sm:block">sort by:</div>
            <!-- <img src="./assets/Expand_down.svg" alt="" srcset=""> -->
            <div class="flex font-bold">
              <button>Name</button>
              <img src="../assets/Expand_down.svg" alt="" srcset="" class="pt-1">
            </div>
          </div>
        </div>
        
        <!-- <div  v-else-if="toasts" class="w-full flex justify-center ">
           
            <section class="bg-blue-100 flex gap-2 rounded-md items-center top-20 lg:right-0 fixed z-[9999] mx-[4%] p-2 animate-bounce">
              <div class="shrink-0">
                    <i class="fa-solid fa-circle-info text-gray-500 text-xl "></i>
                </div>
                    
                <RouterLink to="/" class="flex gap-2">
                    <h2 class="font-base  text-blue-900 text-center">Added</h2>
                    <div class="text-sm text-blue-800 md:text-lg font-bold">{{ newnote.slice(-1)}}</div>
                </RouterLink>
                <div class="shrink-0">
                        <button @click.prevent="toasts = false" class="text-gray-500 hover:text-blue-200 p-0.5  rounded-md">
                            <i class="fa-solid fa-xmark text-xl"></i>
                        </button>
                </div>
            </section>
      </div> -->
      <section  v-if="items.length > 0 && items !== null" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium">
            <div v-for="item in items">
                <router-link :to="/meals/ + item.idMeal"  class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="meal-thumbnail" srcset="" class="  rounded-xl pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                    <div>{{ item.strMeal }}</div>
                </router-link>
            </div>
        </section>
        <section v-else>
            <Suspense>
                <template #default>
                    <temprecipes/> 
                </template>
            </Suspense>
        </section>
        
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