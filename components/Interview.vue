<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <Card>
        <div class="leading-7 px-4 py-4">
            <div class="text-xl mb-4 font-semibold lg:text-xl">
                <slot name="question" />
            </div>
            <slot name="answer" />
        </div>
    </Card>
</template>