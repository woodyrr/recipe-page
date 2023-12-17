<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import mainhead from './components/header.vue'
import categories from './components/categories.vue'

</script>

<template class="flex flex-col gap-6">
  <main>
    <mainhead />
    <Suspense>
      <template #default>
        <div class="px-4">
          <div class="text-white text-[24px] py-6 cathead font-medium">Categories</div>
          <categories />
        </div>
        
      </template>
    </Suspense>
    
  </main>
  
    
  

  
  
</template>

<style>
.cathead{
  font-family: 'Playfair Display', serif;
}

</style>
