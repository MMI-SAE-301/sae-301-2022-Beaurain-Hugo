<script setup lang="ts">
    import montreCarree from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import listColors from '@/components/listColors.vue'
    import listMateriauxBra from '@/components/listMateriauxBra.vue'
    import listMateriauxBoi from '@/components/listMateriauxBoi.vue'
    import type { Montre } from '@/types'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { checkbox } from '@formkit/inputs'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}


    const router = useRouter();
    const props = defineProps<{
        data?: Montre;
        id?: string;
    }>();
    const montre = ref<Montre>(props.data ?? {});
    async function upsertBasket(dataForm, node) {
        dataForm.date = Date.now()
        const { data, error } = await supabase.from("montre").upsert(dataForm);
        if (error) node.setErrors([error.message])
        else {
        node.setErrors([]);
        openModal()
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

    const { data: listeMateriaux, error } = await supabase
    .from("materiaux")
    .select("*");
if (error) console.log("n'a pas pu charger la table Materiaux :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsMateriaux = listeMateriaux?.map((materiaux) => ({
    value: materiaux.idmateriaux,
    label: materiaux.libelle,
}));
</script>

<template>
    
    <div class="grid sm:grid-cols-2 pb-10">
        <FormKit submit-label="Enregistrer" :submit-attrs="{  classes: { input: 'ml-40 font-lexend dark:text-gray-50 dark:bg-blue-700 text-base mt-16 sm:text-lg rounded-sm py-3 px-6 sm:py-4 sm:px-8 bg-blue-300 flex' } }" type="form" v-model="montre" @submit="upsertBasket">
        <p class="font-lexend text-xl dark:text-gray-50 mt-10">Couleurs</p>
        <listColors name="bracelet" label="Bracelet" />
        <listColors name="boitier" label="Boîtier" />
        <listColors name="ecran" label="Ecran" />
        <p class="font-lexend text-xl dark:text-gray-50 mt-5">Matériaux</p>
        <listMateriauxBoi name="materielBoitier" label="Boîtier" />
        <listMateriauxBra name="materielBracelet" label="Bracelet" />
        <FormKit name="commande" label="Commander ?" type="checkbox" wrapper-class="w-full flex text-xl"/>      

    </FormKit>
    <div>
        <montreCarree class="w-64 my-4 mx-auto" v-bind="montre"/>
        <!--<montreRonde v-bind="montre" />-->
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Commande reçue
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Votre commande a été prise en compte !

Vous recevrez votre colis dans 2 jours.
                </p>
              </div>

              <div class="mt-4">
                <router-link
                to="/"
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Retourner à l'accueil
              </router-link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>
</template>