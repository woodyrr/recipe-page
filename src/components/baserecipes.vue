<script setup>
import {ref} from 'vue'
let base = [53049,52893,52768,52855,52767]
let main = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Battenberg'

const base1 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049"
const base2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893"
const base3 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768"
const base4 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767"
const base5 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855"
const base6 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894"

const foodlist1 = ref([]);
foodlist1.value = await fetch(`${base1}`)
.then(response => response.json())
.then(data => data.meals);
  
const foodlist2 = ref([]);
foodlist2.value = await fetch(`${base2}`)
.then(response => response.json())
.then(data => data.meals);

const foodlist3 = ref([]);
foodlist3.value = await fetch(`${base3}`)
.then(response => response.json())
.then(data => data.meals);

const foodlist4 = ref([]);
foodlist4.value = await fetch(`${base4}`)
.then(response => response.json())
.then(data => data.meals);

const foodlist5 = ref([]);
foodlist5.value = await fetch(`${base5}`)
.then(response => response.json())
.then(data => data.meals);

const foodlist6 = ref([]);
foodlist6.value = await fetch(`${base6}`)
.then(response => response.json())
.then(data => data.meals);

// dont know how to fetch them at the same time yet.

// Promise.all([base1,base2,base3,base4])
// .then(([base1,base2,base3,base4]) => {
//     console.log(base1,base2,base3,base4)
// })
// .catch(error => {
//     console.error(error)
// })

</script>
<template>
    <section class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB]">
        <div v-for="item in foodlist1">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist2">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist3">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist4">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist5">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist6">
            <div class=" bg-[#394150] p-3 w-full rounded-xl flex flex-col">
                    <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2 w-full h-[200px] sm:w-[800px]" id="your-img">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <!-- <div v-for="item in foodlist2">
            <div class="text-yellow-400 bg-[#394150] p-3 w-full rounded-xl flex flex-col ">
                <img :src="item.strMealThumb" alt="" srcset="" class="  rounded-lg pb-2">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist3">
            <div class="text-yellow-400 bg-[#394150] p-3 w-full rounded-xl flex flex-col ">
                <img :src="item.strMealThumb" alt="" srcset="" class="  rounded-lg pb-2">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist4">
            <div class="text-yellow-400 bg-[#394150] p-3 w-full rounded-xl flex flex-col ">
                
                <img :src="item.strMealThumb" alt="" srcset="" class=" rounded-lg pb-2">
                <div>{{ item.strMeal }}</div>
            </div>
        </div> -->
        <!-- <div v-for="item in foodlist2">
            <div class="text-yellow-400 bg-white">
                <div>{{ item.strMeal }}</div>
            </div>
        </div>
        <div v-for="item in foodlist3">
            <div class="text-yellow-400 bg-white">
                <div>{{ item.strMeal }}</div>
            
            </div>
        </div>
        <div v-for="item in foodlist4">
            <div class="text-yellow-400 bg-white">
                <div>{{ item.strMeal }}</div>
            
            </div>
        </div> -->
        
    </section>
</template>

<style scoped>
img{
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;
    
}

</style>