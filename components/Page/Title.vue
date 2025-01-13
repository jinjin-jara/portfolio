<script lang="ts" setup>
export type ISize = 'sm' | 'lg'

// props
const props = defineProps({
    size: {
        type: String as () => ISize,
        default: 'lg',
    }
})
// styles
const textStyles = reactive<{
    [key: string]: string
}>({
    sm: 'text-xl lg:text-2xl',
    lg: 'text-2xl lg:text-3xl'
})
const selectedTextStyle = computed(() => textStyles[props.size])
</script>
<template>
    <div :class="selectedTextStyle" class="text-center lg:text-left font-semibold tracking-tight pb-2">
        <div v-if="$slots.icon" class="flex flex-row items-center gap-4">
            <slot name="icon" :size="`lg:w-7 w-4`" />
            <slot />
        </div> 
        <div v-else>
            <slot />
        </div>     
    </div>
</template>