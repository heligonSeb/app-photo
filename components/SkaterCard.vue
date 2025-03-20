<script setup lang="ts">
import type { Skater } from '~/types'

const props = defineProps<{
  skater: Skater
}>()

const initials = computed((): string => {
  return props.skater.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
})

</script>

<template>
    <NuxtLink :to="'/skater/' + skater.id" class="block">
        <UCard class="hover:shadow-lg transition-shadow">
            <div class="flex items-center">
                <UAvatar
                    :text="initials"
                    size="lg"
                    class="mr-4"
                />
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ skater.name }}</h3>

                    <div class="flex flex-wrap gap-2 mt-2">
                        <UBadge v-if="skater.niveau" color="gray" variant="soft">
                            {{ skater.niveau }}
                        </UBadge>

                        <UBadge v-if="skater.category" color="gray" variant="soft">
                            {{ skater.category }}
                        </UBadge>

                        <UBadge v-if="skater.discipline" color="gray" variant="soft">
                            {{ skater.discipline }}
                        </UBadge>

                        <UBadge v-if="skater.programme" color="gray" variant="soft">
                            {{ skater.programme }}
                        </UBadge>
                    </div>
                </div>
            </div>
        </UCard>
    </NuxtLink>
</template>

<style scoped>

</style>