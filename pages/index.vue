<script setup lang="ts">
import type { Competition } from '~/types'

const competitions = ref<Competition[]>([
    {
        id: 1,
        name: "Championnat de France Demi Finale N1",
        location: "Rennes, France",
        date_start: "11/04/2025",
        date_end: "13/04/2025",
        image: "https://picsum.photos/800/400?random=1"
    }
]);
</script>

<template>
    <div class="mx-auto px-4">
        <h1 class="text-5xl font-bold py-8 text-center text-shadow">Sébastien Héligon Photos</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompetitionCard v-for="competition in competitions" :key="competition.id" :competition="competition"/>
        </div>
    </div>
</template>

<style scoped>

</style>