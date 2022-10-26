<script setup lang="ts">
    import formMontre from '@/components/formMontre.vue'
    defineProps<{
        id: string;
    }>();
</script>

<template>
    <formMontre :id="id" />
</template>