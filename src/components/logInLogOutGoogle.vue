<script setup lang="ts">
    import {supabase, user } from '../supabase'
</script>

<template>
    <button @pointerdown="supabase.auth.signIn({provider: 'google'})">
        Se connecter avec Google
    </button>
</template>