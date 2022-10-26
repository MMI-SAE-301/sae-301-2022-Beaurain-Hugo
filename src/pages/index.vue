<script setup lang="ts">
  import exempleMontre from '@/components/exempleMontre.vue'
</script>

<template>
  <section>
    <img class="" src="../../public/illustration_accueil.png" alt="">
    <h1 class="text-2xl">
      Bonjour
    </h1>
  </section>
  <section class="bg-sky-300 py-5">
  <h2 class="ml-3 md:ml-12 text-xl font-bold">
    Besoin d'inspiration ?
  </h2>
  <div class="mt-5">
  <exempleMontre class="flex flex-wrap justify-around gap-5" :max="3" />
  </div>
</section>
</template>