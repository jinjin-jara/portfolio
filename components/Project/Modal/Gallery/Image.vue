<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
    src: {
        type: String,
        default: '',
    }
})
</script>
<template>
    <div class="w-full flex flex-col gap-2 items-center cursor-pointer">
        <Card class="overflow-hidden">
            <img 
                :src="src" 
                :alt="title" 
                class="h-[150px] object-cover w-[270px]"
            />
        </Card>
        <span class="text-sm text-gray-600">{{ title }}</span>
    </div>
</template>