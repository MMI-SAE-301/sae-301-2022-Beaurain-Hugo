<script setup lang="ts">
    import montreCarre from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import type { Montre } from '@/types'
    import { ref } from 'vue'

    const props = defineProps<{
        data?: Montre;
        id?: string;
    }>();
    const montre = ref<Montre>(props.data ?? {});

</script>