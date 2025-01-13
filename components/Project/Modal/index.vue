<script lang="ts" setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" class="relative z-70" @close="$emit(`close`)">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-80" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center align-middle">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-[900px] transform align-middle shadow-xl transition-all relative">
                            <!-- 상단 고정된 네모 박스 -->
                            <div class="absolute top-0 left-0 flex flex-col z-80 bg-transparent fixed transform -translate-y-10">
                                <!-- Close Button Box -->
                                <div class="fordertitle bg-[#ffd689] h-10 px-4 flex items-center justify-center rounded-t-xl cursor-pointer" @click="$emit('close')">
                                    <p class="text-base pt-2">
                                        <slot name="title" />
                                    </p>
                                </div>
                            </div>
                            <div class="h-4 rounded-tr-xl bg-[#ffd689] shadow-inner-custom" />
                            <div class="w-full h-[88dvh] bg-white flex flex-col gap-5 overflow-y-auto">
                                <!-- 모달 내용 -->
                                <div class="px-7 mt-16">
                                    <p class="text-4xl font-semibold">
                                        <slot name="title" />
                                    </p>
                                    <slot />
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<style>
.fordertitle::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 24px 37.5px 0;
    border-color: transparent transparent #ffd689 transparent;
}

.shadow-inner-custom {
  box-shadow: inset 0px -4px 6px rgba(0, 0, 0, 0.12);
}
</style>