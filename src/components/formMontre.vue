<script setup lang="ts">
    import montreCarree from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import listColors from '@/components/listColors.vue'
    import listMateriauxBra from '@/components/listMateriauxBra.vue'
    import listMateriauxBoi from '@/components/listMateriauxBoi.vue'
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
    
    <div class="grid sm:grid-cols-2 mb-10">
        <FormKit submit-label="Enregistrer" :submit-attrs="{  classes: { input: 'ml-40 font-lexend text-base mt-16 sm:text-lg rounded-sm py-3 px-6 sm:py-4 sm:px-8 bg-blue-300 flex' } }" type="form" v-model="montre" @submit="upsertBasket">
        <p class="font-lexend text-xl mt-10">Couleurs</p>
        <listColors name="bracelet" label="Bracelet" />
        <listColors name="boitier" label="Boîtier" />
        <listColors name="ecran" label="Ecran" />
        <p class="font-lexend text-xl mt-5">Matériaux</p>
        <listMateriauxBoi label="Boîtier" />
        <listMateriauxBra label="Bracelet" />
        <FormKit name="commande" label="Commander ?" type="checkbox" wrapper-class="w-full flex text-xl"/>            

    </FormKit>
    <div>
        <montreCarree class="w-64 my-4 mx-auto" v-bind="montre"/>
        <!--<montreRonde v-bind="montre" />-->
    </div>
    
</div>
</template>