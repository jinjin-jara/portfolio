<script lang="ts" setup>
const props = defineProps({
    tags: {
        type: Array as () => string[],
        default: []
    },
})
</script>
<template>
    <div class="flex flex-col gap-4 mt-6">
        <div class="flex flex-row">
            <p class="text-gray-600 min-w-40 w-1/4">Skills and Tools</p>
            <!--skills-->
            <div v-if="tags.length > 0" class="flex flex-row gap-2">
                <Tag v-for="(item, i) in tags" :key="i" :text="`${item}`" />
            </div>
        </div>
        <div class="flex flex-row">
            <p class="text-gray-600 min-w-40 w-1/4">작업 기간</p>
            <slot name="period" />
        </div>
        <div class="flex flex-row">
            <p class="text-gray-600 min-w-40 w-1/4">팀 구성</p>
            <slot name="team" />
        </div>
        <div class="flex flex-row items-center">
            <p class="text-gray-600 min-w-40 w-1/4">담당 파트</p>
            <slot name="part" />
        </div>
        <Border />
    </div>
</template>