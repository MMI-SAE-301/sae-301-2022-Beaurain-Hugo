<script setup lang="ts">
import {user } from '@/supabase'
    import listMontre from '@/components/listMontre.vue'
</script>

<template >
    <div v-if="user" class="dark:text-gray-50">
        <h1 class="md:text-3xl text-xl xs:ml-12 sm:ml-24 md:mr-16 lg:mr-24 mt-3 ml-5 font-lexend font-bold">Vos montres enregistrées</h1>
        <div class="my-8">
            <listMontre class="flex flex-wrap justify-around gap-2" />
        </div>
    </div>
    <div v-else class="dark:text-gray-50 pb-[30REM]">
        <h1 class="md:text-3xl text-xl xs:ml-12 sm:ml-24 md:mr-16 lg:mr-24 mt-3 ml-5 font-lexend font-bold">Connectez-vous pour voir vos montres !</h1>
    </div>
</template>