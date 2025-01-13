<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: '',
    }
})

</script>
<template>
    <div class="flex flex-col gap-2">
        <p class="text-base text-gray-400">{{ title }}</p>
        <div class="grid lg:grid-cols-2 lg:grid-cols-4 gap-2 items-center">
            <slot />
        </div>
    </div>
</template>