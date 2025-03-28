<script setup lang="ts">
import { useProgramsStore } from "~/stores/programs";
import { useProgramState } from "~/composables/usePrograms"

const programsStore = useProgramsStore();
const { getSkaterName } = useProgramState();

const route = useRoute()

const program = programsStore.programs.find(p => p.product_uuid === route.params.id)
const skaterName = getSkaterName(program.subject_tags)

</script>

<template>
    <div class="py-8">
<!--        <UBreadcrumb
            :links="breadcrumpLinks"
            class="mb-6"
        />-->

       <h1 class="text-6xl font-bold text-center text-gray-900 mb-6">Photos du programme de {{ skaterName }}</h1>
    </div>
</template>

<style scoped>

</style>