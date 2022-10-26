<script setup lang="ts">
  import exempleMontre from '@/components/exempleMontre.vue'
  import Montre from '@/components/montreCarreeSvg.vue'
  import {PlusIcon, ChevronDownIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <section class="grid xs:grid-cols-2">
    <img class="sm:w-auto sm:h-full w-full h-auto xs:w-full xs:h-auto" src="../../public/illustration_accueil.png" alt="">
    <div class="lg:mt-32 xs:mt-4 md:mt-28 sm:mt-24" >
      <h1 class="sm:text-xl xs:ml-16 text-base sm:ml-24 md:mr-16 lg:mr-24 xs:mt-10 mt-3 ml-5 font-lexend font-bold">
        LA MONTRE QUE VOTRE POIGNET ATTENDAIT
      </h1>
      <div class="flex justify-center mt-4 mb-3">
        <router-link class="font-lexend text-base sm:text-lg rounded-sm py-3 px-6 sm:py-4 sm:px-8 bg-blue-300 flex" to="/montres/new">
          <PlusIcon class="sm:h-8 sm:w-8 w-4" />CREER
        </router-link>
    </div>
  </div>
  </section>
  <div class="bg-blue-200 md:text-xl xs:text-lg text-sm flex flex-col items-center py-2 xs:py-4 md:py-8 font-bold font-lexend">
    <h2>EN SAVOIR PLUS</h2>
    <ChevronDownIcon class="w-8"/>
  </div>
  <section>

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