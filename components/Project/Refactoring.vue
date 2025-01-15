<script setup lang="ts">
import { moveToWeb } from '../../utils/common';
</script>
<template>
    <div class="flex flex-col">
        <ProjectModalSummary :tags="['vue.js']">
            <template #period>
                2023.01 ~ 2023.2
            </template>
            <template #team>
                프론트 개발자 1명(본인)
            </template>
            <template #part>
                <p>
                    코드 리팩토링 작업 <span class="text-gray-500 lg:text-base text-sm">(100%)</span><br />
                </p>
            </template>
        </ProjectModalSummary>

        <ProjectModalOutline>
            <li>기존 jQuery 기반의 전자지갑 웹을 vue.js로 리팩토링</li>
        </ProjectModalOutline>

        <PageSmallSection>
            <PageTitle size="sm" class="pb-0">
                <p>🤔 느낀점</p>
            </PageTitle>
            <ul class="list-disc leading-7 space-y-3 pl-5">
                <li><b>코드 관리의 용이성</b><br />jQuery 기반의 코드에서는 관리와 유지보수가 어려웠던 부분들이 Vue.js의 컴포넌트 기반 아키텍처 덕분에 크게 개선되었습니다. 코드가 더 구조화되고 모듈화되어, 변경 사항을 처리하거나 기능을 추가하는 과정이 훨씬 효율적이었습니다.</li>
                <li><b>성능 개선</b><br />Vue.js를 도입하면서 데이터 바인딩과 화면 렌더링 성능이 크게 향상되었습니다. 특히, Vue.js의 반응형 데이터 시스템 덕분에 불필요한 DOM 조작이 줄어들고, 사용자 경험이 한층 매끄러워졌습니다.</li>
                <li><b>유연성</b><br />기존 jQuery 코드를 완전히 제거하지 않고 Vue.js와 함께 사용하면서, 레거시 시스템과의 호환성을 유지할 수 있었습니다. 이는 시스템 전환 과정에서 발생할 수 있는 리스크를 줄이는 데 큰 도움이 되었습니다.</li>
            </ul>
        </PageSmallSection>
    </div>
</template>