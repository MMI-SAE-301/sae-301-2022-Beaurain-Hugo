<script setup lang="ts">
  import exempleMontre from '@/components/exempleMontre.vue'
  import {PlusIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <section class="grid xs:grid-cols-2">
    <img class="sm:w-auto sm:h-full w-full h-auto xs:w-full xs:h-auto" src="../../public/illustration_accueil.png" alt="">
    <div class="lg:mt-32 xs:mt-4 md:mt-28 sm:mt-24" >
      <h1 class="sm:text-xl xs:ml-16 text-sm sm:ml-24 md:mr-16 lg:mr-24 xs:mt-10 mt-3 ml-5 font-lexend font-bold">
        LA MONTRE QUE VOTRE POIGNET ATTENDAIT
      </h1>
      <div class="flex justify-center mt-4 mb-3">
        <router-link class="font-lexend text-base sm:text-lg rounded-sm py-3 px-6 sm:py-4 sm:px-8 bg-blue-300 flex" to="/montres/new">
          <PlusIcon class="sm:h-8 sm:w-8 w-4" />CREER
        </router-link>
    </div>
  </div>
  </section>
  <section class="hidden">
    <img class="xs:w-1/2" src="../../public/illustration_accueil.png" alt="">
    <h1 class="text-xl xs:absolute xs:top-20 py-4 mx-3 xs:ml-80 font-lexend font-bold">
      LA MONTRE QUE VOTRE POIGNET ATTENDAIT
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