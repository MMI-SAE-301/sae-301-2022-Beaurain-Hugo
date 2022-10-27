<script setup lang="ts">
    import {supabase, user } from '../supabase'
</script>

<template>
    <button class="flex gap-1" @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
        <img class="w-4 mt-1" src="/facebook.png" alt="">
        Se connecter avec Facebook
    </button>
</template>