<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: ''
    },
    isSkill: {
        type: Boolean,
        default: false,
    }
})
</script>
<template>
<span class="bg-gray-100 px-2 py-1 rounded-md border text-sm" :class="[isSkill ? 'text-red-500 text-[0.9rem]' : '']">{{ text}}</span>
</template>