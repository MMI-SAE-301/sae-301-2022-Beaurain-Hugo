<script setup lang="ts">
import {user } from '@/supabase'
    import listMontre from '@/components/listMontre.vue'
</script>

<template>
    <div v-if="user">
        <h1>Vos montres enregistrées</h1>
        <listMontre />
    </div>
    <div v-else>
        <h1>Connectez-vous pour voir vos montres !</h1>
    </div>
</template>