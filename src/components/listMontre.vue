<script setup lang="ts">
    import { supabase } from "@/supabase";
    import montreCarree from "@/components/montreCarreeSvg.vue";
    const props = defineProps<{
      max?: number;
    }>();
    const { data: montres, error } = await supabase
      .from("montre")
      .select("*")
      .limit(props.max ?? 100);
        if (error) {
          console.log("n'a pas pu récupérer les montres", { error });
        }
</script>
<template>
  <ul>
    <li v-for="montre in montres" :key="montre.id">
      <router-link
        :to="{ name: 'montres-edit-id', params: { id: montre.id } }"
      >
        <montreCarree class="w-64" v-bind="montre" />
        <!--<router-link :to="{ name:'basket-delete-delete', params: {id:basket.id}}">Supprimer</router-link>-->
      </router-link>
    </li>
  </ul>
</template>