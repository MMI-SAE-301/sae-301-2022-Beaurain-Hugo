<template>
    <header>
    <nav class="dark:text-gray-50">
      <div class="flex justify-between dark:bg-gray-900 border-b-2 border-blue-200">
      <router-link to="/" class="sm:hidden font-cinzel text-lg ml-3 mt-2">Tik Tak</router-link>
      <ul class="text-center font-lexend text-base sm:flex hidden gap-14 ml-20">
        <li class="ml-5">
          <router-link to="/" class="font-cinzel text-lg">Tik Tak</router-link>
        </li>
          <li class="mt-0.5 text-base">
            <router-link to="/montres">
              Vos montres
            </router-link>
          </li>
          <li class="mt-0.5">
            <router-link class="" to="/montres/new">
              Personnaliser
            </router-link>
          </li>
          
        </ul>
        <ul>
          <li class="mt-0.5">
            <router-link class="sm:flex hidden mr-5" to="/connexion">
              <UsersIcon class="w-5 h-5 mt-1"/>Se connecter
            </router-link>
          </li>
        </ul>       
      <button class="relative sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
        >
        <Bars3Icon class="h-10 w-10" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div 
    id="menu"
    class="
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
      <button class="absolute top-3 right-3 " 
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        <XMarkIcon class="h-10 w-10"/>
        <span class="sr-only">Fermer menu</span> 
      </button>
      <div class="flex justify-center">
        <ul class="text-center font-lexend">
          <li @click="menuOuvert = !menuOuvert">
            <router-link class="" to="/">
              Accueil
            </router-link>
          </li>
          <li @click="menuOuvert = !menuOuvert">
            <router-link class="" to="/montres">
              Vos montres
            </router-link>
          </li>
          <li @click="menuOuvert = !menuOuvert">
            <router-link class="" to="/montres/new">
              Personnaliser
            </router-link>
          </li >
          <li @click="menuOuvert = !menuOuvert">
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
    <router-view class="p-2 dark:bg-gray-900" />
  </Suspense>

  <footer class="dark:bg-blue-800 bg-blue-100">
    <nav class="dark:text-gray-50">
      <div class="sm:flex hidden justify-around py-4">
      <ul>
        <li><a class="font-lexend font-bold text-3xl" href="#">Nous suivre</a></li>
        <li><a class="font-source-code-pro text-lg" href="#">Instagram</a></li>
        <li><a class="font-source-code-pro text-lg" href="#">Facebook</a></li>
        <li><a class="font-source-code-pro text-lg" href="#">Twitter</a></li>
      </ul>
      <ul>
        <li><router-link class="font-lexend font-bold text-3xl" to="/connexion">Se connecter</router-link></li>
        <li><a class="font-source-code-pro text-lg" href="#">Google</a></li>
        <li><a class="font-source-code-pro text-lg" href="#">Facebook</a></li>
      </ul>
    </div>
    <div class="sm:hidden text-center py-10">
      <ul>
        <li><a class="font-lexend font-bold text-xl" href="#">Nous suivre</a></li>
        <li><a class="font-source-code-pro text-base" href="#">Instagram</a></li>
        <li><a class="font-source-code-pro text-base" href="#">Facebook</a></li>
        <li><a class="font-source-code-pro text-base" href="#">Twitter</a></li>
      </ul>
      <ul>
        <li><router-link class="font-lexend font-bold text-xl" to="/connexion">Se connecter</router-link></li>
        <li><a class="font-source-code-pro text-base" href="#">Google</a></li>
        <li><a class="font-source-code-pro text-base" href="#">Facebook</a></li>
      </ul> 
    </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { Bars3Icon, UsersIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from 'vue'
const menuOuvert = ref(false)
</script>


