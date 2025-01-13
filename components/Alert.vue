<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog } from '@headlessui/vue'
export type IStyles = 'primary' | 'success' | 'warning' | 'danger'

// props
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'success',
    },
    function: {
        type: Function,
        required: false,
    },
    isShow: {
        type: Boolean,
        default: false,
    }
})
// styles
const styles = reactive<{
    [key: string]: string
}>({
    primary: 'bg-blue-400',
    success: 'bg-emerald-400',
    warning: 'bg-orange-400',
    danger: 'bg-rose-400',
})
const textStyles = reactive<{
    [key: string]: string
}>({
    primary: 'text-white',
    success: 'text-green-600',
    warning: 'text-orange-500',
    danger: 'text-red-500',
})

// selected
const selectedType = computed<IStyles>((): IStyles => {
    if (['primary', 'success', 'warning', 'danger'].includes(props.type))
        return props.type as IStyles
    return 'primary'
})
const selectedStyle = computed(() => styles[selectedType.value])
const selectedTextStyle = computed(() => textStyles[selectedType.value])

// emit 정의
const emits = defineEmits(['update-value'])

// actions
const close = () => {
    // isDestroyed.value = true
    if (props.function) props.function()
    emits('update-value', false)
}
</script>

<template>
    <TransitionRoot :show="isShow" appear class="relative z-10">
        <Dialog as="div" class="relative z-99 cursor-pointer" @click="close">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-50" />
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-300 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div :class="`p-3 rounded-lg shadow-lg flex flex-col ${selectedStyle} min-w-100`">
                            <div class="w-full flex justify-end">
                                <p class="text-white font-bold cursor-pointer" @click="close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                                        <path fill="currentColor"
                                            d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z"
                                            class="clr-i-outline clr-i-outline-path-1" />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex flex-col gap-1 text-white pt-2 pb-4 px-4">
                                <div :class="`font-bold text-2xl mb-1 text-white`">
                                    <slot name="title"> {{ title }}</slot>
                                </div>
                                <div v-if="text" class="text-white text-lg">
                                    <slot name="text">{{ text }}</slot>
                                </div>
                            </div>

                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>