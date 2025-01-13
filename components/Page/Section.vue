<script setup lang="ts">
defineProps({
    sectionId: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="section pt-4 lg:pt-10" :id="sectionId">
        <slot />
    </div>
</template>