<script setup lang="ts">
import type { Competition } from '~/types'

const competitions = ref<Competition[]>([
    {
        id: 1,
        name: "My Best Competition",
        location: "Torino, Italie",
        date_start: "19/10/2020",
        date_end: "25/10/2020",
        image: "https://picsum.photos/800/400?random=1"
    },
    {
        id: 2,
        name: "My Best Competition Agian",
        location: "Rome, Italie",
        date_start: "19/03/2021",
        date_end: "25/03/2021",
        image: "https://picsum.photos/800/400?random=2"
    },
    {
        id: 3,
        name: "The Competition",
        location: "Rennes, Bretagne",
        date_start: "19/10/2021",
        date_end: "25/10/2021",
        image: "https://picsum.photos/800/400?random=3"
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