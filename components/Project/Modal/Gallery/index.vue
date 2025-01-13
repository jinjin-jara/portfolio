<template>
    <PageSmallSection>
        <PageTitle size="sm" class="pb-0">
            <p>🖼️ 이미지</p>
            <span>클릭하면 큰 이미지로 열람할 수 있습니다.</span>
        </PageTitle>
        <div class="pl-5">
            <ul class="list-disc leading-7 space-y-3">
                <slot />
            </ul>
        </div>
    </PageSmallSection>
</template>