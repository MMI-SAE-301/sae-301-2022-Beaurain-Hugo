<script setup lang="ts">
    import montreCarree from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import listColors from '@/components/listColors.vue'
    import type { Montre } from '@/types'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
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
        router.push({ name: "montres-edit-id", params: { id: data[0].id } });
        }
    }
    if (props.id) {
        // On charge les données de la maison
        let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("id", props.id);
        if (error) console.log("n'a pas pu charger le table montre :", error);
        else montre.value = (data as any[])[0];
    }       
</script>

<template>
    <div class="grid grid-cols-2">
    <div>
        <montreCarree class="w-64" v-bind="montre"/>
        <!--<montreRonde v-bind="montre" />-->
    </div>
    <FormKit type="form" v-model="montre" @submit="upsertBasket">
        <listColors name="bracelet" label="Bracelet" />
        <listColors name="boitier" label="Boîtier" />
        <listColors name="ecran" label="Ecran" />
    </FormKit>
</div>
</template>