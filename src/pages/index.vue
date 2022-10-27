<script setup lang="ts">
// @ts-nocheck
  import exempleMontre from '@/components/exempleMontre.vue'
  import {PlusIcon, ChevronDownIcon} from '@heroicons/vue/24/solid'
</script>

<template >
  <div class="dark:text-gray-50 ">
  <section class="grid xs:grid-cols-2">
    <img class="w-full h-auto xs:w-auto xs:h-full" src="../../public/illustration_accueil.png" alt="">
    <div class="sm:mt-8 md:mt-16 lg:mt-32" >
      <h1 class="lg:text-3xl text-xl xs:ml-12 sm:ml-24 md:mr-16 lg:mr-24 mt-3 ml-5 font-lexend font-bold">
        LA MONTRE QUE VOTRE POIGNET ATTENDAIT
      </h1>
      <div class="flex justify-center mt-1 sm:mt-4 mb-3">
        <router-link class="font-lexend text-base sm:text-lg rounded-sm py-3 px-6 sm:py-4 sm:px-8 // @ts-nocheck bg-blue-300 flex" to="/montres/new">
          <PlusIcon class="sm:h-8 sm:w-8 w-4" />CREER
        </router-link>
    </div>
  </div>
  </section>
  <div class="bg-blue-200 dark:bg-blue-800 md:text-xl xs:text-lg text-sm flex flex-col items-center py-2 xs:py-4 md:py-8 font-bold font-lexend">
    <h2>EN SAVOIR PLUS</h2>
    <ChevronDownIcon class="w-8"/>
  </div>
  <section class="my-10">
    <div>
      <img class="m-auto w-11/12 xs:w-3/4" src="../../public/illustration_modification.png" alt="">
      
  </div>
  <div class="mt-5">
    <h2 class="font-lexend font-bold ml-3 md:ml-12 text-lg">Vos montres sont uniques</h2>
    <p class="font-source-code-pro mx-3 md:mx-12">Soyez le créateur de votre montre ! Personnalisez votre montre, recevez-la et portez la à votre poignet ! Vous ne trouverez votre montre nulle part ailleurs, et pourrez ainsi l’arborez fièrement à tous vos amis !</p>
  </div>
  </section>
  <section class="bg-sky-300 py-5 dark:bg-gray-900">
  <h2 class="ml-3 md:ml-12 text-lg font-bold">
    Besoin d'inspiration ?
  </h2>
  <div class="mt-5">
  <exempleMontre class="flex flex-wrap justify-around gap-5 " :max="3" />
  </div>
</section>
</div>
</template>