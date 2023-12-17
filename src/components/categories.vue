<script setup>
import {ref} from 'vue'
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php?'
const foodlist = ref([]);
foodlist.value = await fetch(`${baseUrl}`)
.then(response => response.json())
.then(data => data.categories.slice(0,6));
console.log(foodlist)

// let newfoodList = foodlist.slice(0,7)
// console.log(newfoodList)



</script>
<template>
    <section class="grid grid-cols-2  gap-3 ">
        <div v-for="item in foodlist" class="relative">
            <div class=" bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-lg duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black overflow-hidden">
                <!-- <div> -->
                    <img :src="item.strCategoryThumb" alt="" srcset="" class="catimg w-[30%] h-full ml-[-40px]  lg:ml-[-60px] rounded-l-full ">
                <!-- </div> -->
                
                <!-- absolute left-[-30px] -->
                <div class="flex justify-center items-center text[14px]">{{ item.strCategory }}</div>
            </div>
        </div>
    </section>
    
</template>
