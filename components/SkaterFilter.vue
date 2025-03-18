<script setup lang="ts">
const filters = {
    niveaux: ["N1", "N2", "N3"],
    categories: ["Mini", "Cadet", "Junior", "Senior"],
    disciplines: ["Danse", "Freeskating", "Groupe"],
    programmes: [
        {name: "Danse Libre", shortname: "DL"},
        {name: "Danse Imposée", shortname: "DI"},
        {name: "Programme Long", shortname: "PL"},
        {name: "Programme Court", shortname: "PC"}
    ]
};

const selectedFilter = reactive({
    niveaux: [],
    categories: [],
    disciplines: [],
    programmes: [],
});

const emit = defineEmits(['filter'])

const emitFilters = () => {
    emit('filter', {
        niveaux: selectedFilter.niveaux,
        categories: selectedFilter.categories,
        disciplines: selectedFilter.disciplines,
        programmes: selectedFilter.programmes
    });
};
</script>

<template>
    <UCard class="mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div v-for="(options, filtername) in filters" :key="filtername">
                <h3 class="text-sm font-medium text-gray-700 mb-2">{{ filtername }}</h3>
                <div class="space-y-2">
                    <UCheckbox
                        v-for="item in options"
                        :key="typeof item === 'string' ? item : item.shortname"
                        :label="typeof item === 'string' ? item : item.shortname"
                        v-model="selectedFilter[filtername]"
                        :value="typeof item === 'string' ? item : item.shortname"
                        @change="emitFilters"
                    />
                </div>
            </div>
        </div>
    </UCard>
</template>

<style scoped>

</style>