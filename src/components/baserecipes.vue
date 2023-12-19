<script>
import {ref} from 'vue'
let base = [53049,52893,52768,52855]
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const foodlist = ref([]);
foodlist.value = await fetch(`${baseUrl}`)
.then(response => response.json())
.then(data => data);
console.log(foodlist)
</script>
<template>
    <section v-for="item in foodlist">
        
    </section>
</template>