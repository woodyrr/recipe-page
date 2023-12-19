<script>
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
</script>
<template>
    <section>
        
    </section>
</template>