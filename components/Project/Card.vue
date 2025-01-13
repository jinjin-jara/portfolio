<script setup lang="ts">
defineProps({
    tags: {
        type: Array as () => string[],
        default: []
    },
    noImage: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <Card class="h-100 overflow-hidden cursor-pointer hover:bg-zinc-200 duration-300 transition-colors">
        <div class="flex flex-col">
            <!--이미지 영역-->
            <div class="h-50 overflow-hidden border-b-1 border-gray-300 bg-white flex items-center justify-center">
                <slot name="image" />
                <img v-if="noImage" src="/portfolio/archive.png" class="w-40" />
            </div>
            <div class="h-50 flex flex-col justify-between p-4">
                <div class="h-full flex flex-col gap-2">
                    <p class="text-xl font-semibold">
                        <slot name="title" />
                    </p>
                    <p class="leading-6 text-[0.9rem]">
                        <slot name="desc" />
                    </p>
                </div>
                <!--skills-->
                <div v-if="tags.length > 0" class="flex flex-row gap-2">
                    <Tag v-for="(item, i) in tags" :key="i" :text="`# ${item}`" />
                </div>
            </div>
        </div>
    </Card>
</template>