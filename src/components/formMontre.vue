<script setup lang="ts">
    import montreCarre from '@/components/montreCarreeSvg.vue'
    import montreRonde from '@/components/montreRondeSvg.vue'
    import type { Montre } from '@/types'

    const props = defineProps<{
        data?: Montre;
        id?: string;
    }>();
</script>