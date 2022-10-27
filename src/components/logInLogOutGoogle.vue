<script setup lang="ts">
    import {supabase, user } from '../supabase'
</script>

<template>
    <button class="flex gap-1 w-3/4 text-sm p-2 font-source-code-pro border-2 rounded-md border-blue-500" @pointerdown="supabase.auth.signIn({provider: 'google'})">
        <img class="w-4 mt-1 ml-2" src="/google.png" alt="">
        Se connecter avec Google
    </button>
</template>