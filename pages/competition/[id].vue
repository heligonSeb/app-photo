<script setup lang="ts">
import type {Skater, SelectedFilters} from "~/types"

const competition = ref({
    id: 1,
    name: "My Best Competition",
});

const breadcrumpLinks = ref([
    {
        label: 'Accueil',
        to: '/',
        icon: 'mdi-light:home'
    },
    {
        label: "My Best Competition",
        to: '#',
        icon: 'material-symbols-light:group-search'
    }
])

const skaters = ref<Skater[]>([
    {
        id: 1,
        name: "Marie Dupont",
        niveau: "N1",
        category: "senior",
        discipline: "danse",
        programme: "PL"
    },
    {
        id: 2,
        name: "Lucas Martin",
        niveau: "N2",
        category: "espoir",
        discipline: "freeskating",
        programme: "PC"
    },
    {
        id: 2,
        name: "Lucas Martin",
        niveau: "N2",
        category: "espoir",
        discipline: "freeskating",
        programme: "PL"
    },
    {
        id: 2,
        name: "Marie Martin",
        niveau: "N3",
        category: "junior",
        discipline: "danse",
        programme: "DL"
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

const filteredSkaters = computed((): Skater[] => {
    let copySkater = [...skaters.value]
    let result = []

    console.log(activeFilter.value)

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
        <h1 class="text-6xl font-bold text-center text-gray-900 mb-6">{{ competition.name }}</h1>

        <UInput
            v-model="searchQuery"
            placeholder="Search skaters..."
            icon="i-heroicons-magnifying-glass"
            class="mb-6"
        />

        <SkaterFilter @filter="filterData"/>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkaterCard v-for="skater in filteredSkaters" :key="skater.id" :skater="skater" />
        </div>
    </div>
</template>

<style scoped>

</style>