<template>
    <header>
    <nav>
      <div class="flex justify-between">
      <router-link to="/" class="font-cinzel text-lg">Tik Tak</router-link>        
      <button class="relative sm:hidden"
        @click="menuOuvert = !menuOuvert"
        >
        <Bars3Icon class="h-10 w-10" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div class="
        fixed
        inset-0
        flex
        translate-x-full
        flex-col
        justify-center
        bg-blue-300
        motion-safe:transition-transform motion-safe:duration-1000
      "
      :class="{ 'translate-x-0': menuOuvert }">
      <div class="flex justify-center">
        <ul class="text-center font-lexend">
          <li>
            <router-link class="" to="/">
              Accueil
            </router-link>
          </li>
          <li>
            <router-link class="" to="/montres">
              Vos montres
            </router-link>
          </li>
          <li>
            <router-link class="" to="/montres/new">
              Personnaliser
            </router-link>
          </li>
          <li>
            <router-link class="flex" to="/connexion">
              <UsersIcon class="w-5 h-5"/>Se connecter
            </router-link>
          </li>
        </ul>
        
      </div>
    </div>
    </nav>
  </header>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon, UsersIcon } from "@heroicons/vue/20/solid";
import { ref } from 'vue'
const menuOuvert = ref(false)
</script>


