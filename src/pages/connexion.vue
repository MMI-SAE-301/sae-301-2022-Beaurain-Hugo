<script setup lang="ts">
    import logInLogOutGoogle from '@/components/logInLogOutGoogle.vue'
    import logInLogOutFacebook from '@/components/logInLogOutFacebook.vue'
    import {supabase, user } from '../supabase'

</script>

<template>
    <button v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{user.email}})
    </button>
    <div v-else>
        <logInLogOutGoogle />
        <logInLogOutFacebook />
    </div>
</template>

