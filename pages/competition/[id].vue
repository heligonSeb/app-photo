<script setup lang="ts">
import type { Skater, SelectedFilters, Program } from "~/types"
import { useFetch } from "nuxt/app";
import { useProgramsStore } from "~/stores/programs";

const programsStore = useProgramsStore();


const route = useRoute()

const competitionName = route.params.id

const {data, error} = await useFetch('https://n8n.koden.bzh/webhook/015c1aea-3ae0-408f-bac4-fe4e6be6b99e', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});

if (data.value) {
    programsStore.setPrograms(data.value)
} else {
    console.error('Erreur lors de la récupération des données :', error.value);
}

const breadcrumpLinks = ref([
    {
        label: 'Accueil',
        to: '/',
        icon: 'mdi-light:home'
    },
    {
        label: competitionName,
        to: '#',
        icon: 'material-symbols-light:group-search'
    }
])

const activeFilter = ref<SelectedFilters>({
    niveaux: [],
    categories: [],
    disciplines: [],
    programmes: []
})

const filterData = (filter: SelectedFilters) => {
    activeFilter.value = filter
}

const filteredProgram = computed((): Skater[] => {
    let copySkater = [...skaters.value]
    let result = []

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = copySkater.filter(skater =>
            skater.name.toLowerCase().includes(query)
        )
    }

    if (activeFilter.value.niveaux?.length) {
        result = copySkater.filter(skater => {
            const niveaux = activeFilter.value.niveaux.map(niveau => niveau.toLowerCase())
            return skater.niveau && niveaux.includes(skater.niveau.toLowerCase())
        })
    }

    if (activeFilter.value.disciplines?.length) {
        result = copySkater.filter(skater => {
            const disciplines = activeFilter.value.disciplines.map(discipline => discipline.toLowerCase())
            return skater.discipline && disciplines.includes(skater.discipline.toLowerCase())
        })
    }

    if (activeFilter.value.categories?.length) {
        result = copySkater.filter(skater => {
            const categories = activeFilter.value.categories.map(category => category.toLowerCase())
            return skater.category && categories.includes(skater.category.toLowerCase())
        })
    }

    if (activeFilter.value.programmes?.length) {
        result = copySkater.filter(skater => {
            const programmes = activeFilter.value.programmes.map(programme => programme.toLowerCase())
            return skater.programme && programmes.includes(skater.programme.toLowerCase())
        })
    }

    return result
})

const searchQuery = ref('')


</script>

<template>
    <div class="py-8">
        <UBreadcrumb
            :links="breadcrumpLinks"
            class="mb-6"
        />
        <h1 class="text-6xl font-bold text-center text-gray-900 mb-6">{{ competitionName }}</h1>

        <UInput
            v-model="searchQuery"
            placeholder="Search skaters..."
            icon="i-heroicons-magnifying-glass"
            class="mb-6"
        />

        <SkaterFilter @filter="filterData"/>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <ProgramCard v-for="program in programsStore.programs" :key="program.product_uuid" :program="program"/>
        </div>
    </div>
</template>

<style scoped>

</style>
