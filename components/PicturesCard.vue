<script setup lang="ts">

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <UCard
            v-for="photo in photos"
            :key="photo.file"
            class="group"
        >
            <img :src="photo.url" :alt="photo.file" class="w-full h-64 object-cover rounded-lg">
            <template #footer>
                <div class="flex justify-center">
                    <UButton
                        color="white"
                        variant="solid"
                        label="Buy Photo"
                        icon="i-heroicons-shopping-cart"
                    />
                </div>
            </template>
        </UCard>
    </div>
</template>

<style scoped>

</style>