<script setup lang="ts">
defineProps({
    competition: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <NuxtLink :to="`/competition/${competition.id}`">
        <div class="bg-white rounded-lg shadow-md p-0 hover:shadow-lg transition-shadow mb-5">
            <img :src="competition.image" :alt="competition.name" class="w-full h-48 object-cover rounded-t-lg"/>

            <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ competition.name }}</h2>
                <div class="flex items-center text-gray-600 mb-2">
                    <UIcon name="ic:baseline-calendar-month" class="w-4 h-4 mr-2 flex-shrink-0"/>
                    <span> {{ competition.date_start }} - {{ competition.date_end }} </span>
                </div>

                <div class="flex items-center text-gray-600 mb-2">
                    <UIcon name="map:postal-code" class="w-4 h-4 mr-2 flex-shrink-0"/>
                    <span>{{ competition.location }}</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>

</style>