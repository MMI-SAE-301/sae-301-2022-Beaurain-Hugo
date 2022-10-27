<script setup lang="ts">
// @ts-nocheck
    import formMontre from '@/components/formMontre.vue'
    defineProps<{
        id: string;
    }>();
</script>

<template>
    <formMontre :id="id" />
</template>