<script setup lang="ts">
    import logInLogOutGoogle from '@/components/logInLogOutGoogle.vue'
    import logInLogOutFacebook from '@/components/logInLogOutFacebook.vue'
    import {supabase, user } from '../supabase'

</script>

<template>
    <div v-if="user" class="dark:text-gray-50">
        <h1 class="md:text-3xl text-xl xs:ml-12 sm:ml-24 md:mr-16 lg:mr-24 mt-3 ml-5 font-lexend font-bold">Cliquez sur le bouton pour vous déconnecter !</h1>

        <div class="flex my-10 mb-64 sm:mb-80 lg:mb-[26REM] flex-col m-auto items-center xs:w-96 rounded-lg border-blue-200 border-2 gap-3 py-5">

    <button @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{user.email}})
    </button>
    </div>
</div>
    <div v-else class="dark:text-gray-50">
        <h1 class="md:text-3xl text-xl xs:ml-12 sm:ml-24 md:mr-16 lg:mr-24 mt-3 ml-5 font-lexend font-bold">Connectez-vous pour créer votre montre personnel !</h1>
        <div class="flex my-10 sm:mb-32 lg:mb-60 flex-col m-auto items-center xs:w-96 rounded-lg border-blue-200 border-2 gap-3 pt-2 pb-10">
            <p class="font-source-code-pro ">Choisissez votre moyen de connexion</p>
        <logInLogOutGoogle />
        <logInLogOutFacebook />
        </div>
    </div>  
</template>

