<script setup lang="ts">
    import montreCarree from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import listColors from '@/components/listColors.vue'
    import type { Montre } from '@/types'
    import { ref } from 'vue'

    const props = defineProps<{
        data?: Montre;
        id?: string;
    }>();
    const montre = ref<Montre>(props.data ?? {});
    async function upsertBasket(dataForm, node) {
        const { data, error } = await supabase.from("montre").upsert(dataForm);
        if (error) node.setErrors([error.message])
        else {
        node.setErrors([]);
        }
    }
</script>

<template>
    <div>
        <montreCarree class="w-64" v-bind="montre"/>
        <!--<montreRonde v-bind="montre" />-->
    </div>
    <FormKit type="form" v-model="montre" @submit="upsertBasket">
        <listColors name="bracelet" label="Bracelet" />
        <listColors name="boitier" label="Boîtier" />
        <listColors name="ecran" label="Ecran" />
    </FormKit>
</template>