<script setup lang="ts">
import type { Program } from '~/types'
import {useProgramState} from "~/composables/usePrograms";

const { getSkaterName } = useProgramState()

const props = defineProps<{
    program: Program
}>()

const initials = computed(() => {
    const skaters = props.program.subject_tags

    if (skaters.length === 0) {
        return 'N/A'
    }

    if (skaters.length === 1) {
        return skaters[0]
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
    }

    if (skaters.length > 1) {
        return skaters
            .map(skater => skater.split(' ')[0][0])
            .join('')
            .toUpperCase()
    }
})

const skaterName = getSkaterName(props.program.subject_tags)
</script>

<template>
    <NuxtLink :to="'/program/'+ program.product_uuid" class="block">
        <UCard class="hover:shadow-lg transition-shadow">
            <div class="flex items-center">
                <UAvatar
                    :text="initials"
                    size="lg"
                    class="mr-4"
                />

                <div>
                    <h3 class="text-lg font-semibold text-gray-800"> {{ skaterName }} </h3>

                    <div class="flex flex-wrap gap-2 mt-2">
                        <UBadge v-for="tag in props.program.category_tags" :key="`${skaterName}-${tag}`" color="gray" variant="soft">
                            {{ tag }}
                        </UBadge>
                    </div>
                </div>
            </div>
        </UCard>
    </NuxtLink>
</template>

<style scoped>

</style>