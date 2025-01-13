<script setup lang="ts">
type ILevel = '고급' | '중급' | '초급'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    level: {
        type: String as () => ILevel,
        default: '고급'
    },
    noneLevel: {
        type: Boolean,
        default: false,
    }
})

const levelNumber = computed(() => {
    if (props.level === '고급') {
        return 3
    } else if (props.level === '중급') {
        return 2
    } else {
        return 1
    }
})
</script>
<template>
    <Card class="flex flex-row px-3 py-2 items-center justify-between">
        <div class="flex flex-row items-center gap-2">
            <div class="w-5">
                <slot name="image" />
            </div>
            <p class="text-gray-500">{{ title }}</p>
        </div>
        <div v-if="!noneLevel" class="flex flex-row gap-1">
            <div v-for="i in levelNumber" :key="i" class="w-5 h-5 bg-blue-200 rounded-md" />
        </div>
    </Card>
</template>