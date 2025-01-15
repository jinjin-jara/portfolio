<template>
    <PageSmallSection>
        <PageTitle size="sm" class="pb-0">
            <p>🖼️ 이미지</p>
            <span class="text-base text-gray-600 font-normal">클릭하면 큰 이미지로 열람할 수 있습니다.</span>
        </PageTitle>
        <div class="grid md:grdi-cols-2 lg:grid-cols-3 gap-2">
            <slot />
        </div>
    </PageSmallSection>
</template>