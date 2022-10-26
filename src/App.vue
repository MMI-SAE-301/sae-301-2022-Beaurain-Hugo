<template>
    <header>
    <nav>
      <div class="flex justify-between">
      <router-link to="/" class="font-cinzel text-lg">Tik Tak</router-link>        
      <button class="relative sm:hidden"
        >
        <Bars3Icon class="h-10 w-10" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/">
            lien vers
            <code class="font-mono">/src/pages/index.vue</code>
          </router-link>
        </li>
        <li>
          <router-link class="text-red-600 underline" to="/montres">
            lien vers
            <code class="font-mono">/src/pages/montres/index.vue</code>
          </router-link>
        </li>
        <li>
          <router-link class="text-red-600 underline" to="/montres/new">
            lien vers
            <code class="font-mono">/src/pages/montres/new.vue</code>
          </router-link>
        </li>
        <li>
          <router-link class="text-red-600 underline" to="/connexion">
            lien vers
            <code class="font-mono">/src/pages/connexion.vue</code>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
