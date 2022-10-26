<script setup lang="ts">
  import exempleMontre from '@/components/exempleMontre.vue'
</script>

<template>
  <section>
    <h1 class="text-2xl">
      Bonjour<code class="font-mono text-base">/src/pages/index.vue</code>
    </h1>
  </section>
  <section>
  <h2>
    Exemple de montres
  </h2>
  <exempleMontre class="flex flex-wrap gap-2" :max="3" />
</section>
</template>