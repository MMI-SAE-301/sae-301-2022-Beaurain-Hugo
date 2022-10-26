<script setup lang="ts">
    import {supabase, user } from '../supabase'
</script>

<template>
    <button @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
        Se connecter avec Facebook
    </button>
</template>