<script setup lang="ts">
import { moveToWeb } from '../../utils/common';

const selectedItemSrc = ref('')
const isModalOpen = computed(() => !!selectedItemSrc.value)

// 모달 닫기
function closeModal() {
    selectedItemSrc.value = ''
}

const imageList: { src: string, title: string }[] = [
    {
        title: 'API Playground',
        src: '/portfolio/baas1.png'
    },
]
</script>
<template>
    <div class="flex flex-col">
        <ProjectModalSummary :tags="['nuxt.js', 'spring boot']">
            <template #period>
                2023.09 ~ 2023.12
            </template>
            <template #team>
                프론트 개발자 1명(본인), 백엔드 개발자 1명
            </template>
            <template #part>
                <p>
                    UI/UX 디자인 및 프론트엔드 개발 <span class="text-gray-500 lg:text-base text-sm">(100%)</span><br />
                </p>
            </template>
        </ProjectModalSummary>

        <PageSmallSection>
            <PageTitle size="sm" class="pb-0">
                <p>🔗 관련 링크</p>
            </PageTitle>
            <p @click="moveToWeb(`https://fassetchain-dev.fingerservice.co.kr`)"
                class="flex flex-col gap-2 flex-wrap cursor-pointer border border-gray-300 p-2 rounded-lg">
                <span class="font-medium">F-wallet 홈페이지 바로가기</span>
                <span
                    class="text-blue-500 text-base">테스트 아이디: finger@yopmail.com / 비밀번호: 1</span>
                <span
                    class="text-sm">https://fassetchain-dev.fingerservice.co.kr</span>
            </p>
        </PageSmallSection>
        <ProjectModalOutline>
            <li>각종 블록체인 API를 쉽게 사용할 수 있는 가이드 플랫폼 웹 개발</li>
            <li><span class="font-medium">핵심 기능</span>
                <ul class="list-circle pl-5">
                    <li>API Docs 화면을 통해 블록체인 API에 대한 문서 제공</li>
                    <li>콘솔 화면에서 API 요청 및 응답 실시간 테스트 기능</li>
                </ul>
            </li>
        </ProjectModalOutline>
        <ProjectModalFunction>
            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="nuxt plugin" />과 <Tag :is-skill="true" text="definePageMeta" />를 활용한 웹 내 페이지 검색 기능 구현
                </p>
                <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base">
                    nuxt plugin은 Nuxt 애플리케이션이 구동될 때 특정 코드나 외부 라이브러리를 초기화하고자 할 때 사용되는 개념입니다.
                이 개념과 Nuxt에서 제공하는 <Tag :is-skill="true" text="definePageMeta" /> 메서드를 사용하여 메타 정보에 페이지 타이틀을 선언하여 페이지 검색 기능을 구현하였습니다.
                <p class="mt-2 text-blue-500 cursor-pointer hover:text-blue-600 duration-300" @click="moveToWeb('https://jinnnkcoding.tistory.com/237')">관련 블로그 포스팅 보기</p>
                </div>
                
            </li>
            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="pinia" /> 라이브러리를 활용하여 API Playground 페이지 구현
                </p>
                <div class="text-base leading-7">사용자 선택 정보를 전역적으로 관리하고 새로고침이나 페이지 라우팅에도 상태를 유지하기 위해 Pinia를 도입하였습니다. <br />
                    이를 통해 사용자가 선택한 개발 언어와 라이브러리에 맞춰 API 사용 예시 코드를 안정적으로 보여줄 수 있도록 구현하였습니다.</div>
            </li>
            <li>
                <p class="mb-1 font-medium">구문 강조(syntax highlighting)을 적용한 API 사용 예제 코드 컴포넌트 구현</p>
                <div class="text-base leading-7">
                    <Tag :is-skill="true" text="highlight.js" /> 라이브러리를 활용하여 API Playground의 코드 부분을 실제 에디터에서 보이는 것처럼 구문 강조(syntax highlighting)를 적용하였습니다.
                    <br />하지만 화면 렌더링 시 한번 호출되어 하이라이팅을 하는 함수로, 사용자가 파라미터를 변경하면 코드 하이라이팅이 풀려버리는 현상이 있었습니다.🥲
                    이 부분은 nuxt의 내장 함수인 <Tag :is-skill="true" text="watch" />(특정 데이터의 변화를 감지하여 자동으로 로직을 수행하는 메서드)를 사용하여 input data에 watch를 걸어 즉각적으로 코드 하이라이팅을 적용하여 이 점을 해결할 수 있었습니다.
                </div>
            </li>
            <div class="flex flex-col gap-1 items-center">
                <img src="/portfolio/syntax highlighting.png" alt="highlight 활용 예시" class="w-100" />
                <span class="text-gray-600 text-sm mb-4">highlight.js를 활용하여 구문 강조를 한 컴포넌트</span>
            </div>
            <div class="flex flex-col gap-1 items-center">
                <img src="/portfolio/syntax highlighting2.png" alt="highlight 코드" />
                <span class="text-gray-600 text-sm mb-4">실제 코드 구현부</span>
            </div>
            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="nuxt content" /> 모듈을 활용하여 Markdown 기반의 API 문서를 포스팅 성향의 웹페이지로 쉽게 구현
                </p>
                <div class="text-base">
                    정적 파일(Markdown)을 바로 Vue 컴포넌트처럼 사용할 수 있어 API 문서화 작업이 간단하고 효율적이었습니다.<br />
                    또한, <Tag :is-skill="true" text="ContentQuery" />를 활용하여 API 검색 기능(페이지 탐색)을 보다 쉽게 구현할 수 있었습니다.
                </div>
            </li>
            <div class="flex flex-col gap-1 items-center">
                <img src="/portfolio/nuxt-content.png" alt="nuxt content 활용예시" />
                <span class="text-gray-600 text-sm mb-4">nuxt content를 활용하여 마크다운 형식으로 페이지 생성</span>
            </div>
            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="Tailwind CSS" />를 사용하여 효율적이고 일관된 스타일링 구현
                </p>
                <div class="text-base">
                    프로젝트 전반에 걸쳐 <span class="font-semibold">CSS 작성 시간을 약 40% 절감</span>하고, 일관된 디자인 시스템을 유지할 수 있었습니다.
                    <div class="ml-2 mt-2 bg-zinc-200 p-2 rounded-md">
                        <p>- 별도의 CSS 파일 없이 HTML에서 유틸리티 클래스를 사용해 <span class="font-semibold">즉각적인 스타일링</span>이 가능하여 작업 속도 향상</p>
                        <p>- 디자인 시스템(색상, 여백, 폰트 등)을 <span class="font-semibold">Tailwind의 테마 설정(tailwind.config.js)</span>으로 정의하여 <span class="font-semibold">재사용성과 유지보수성</span> 확보</p>
                        <p>- 반응형 클래스(sm, md, lg)를 활용해 <span class="font-semibold">다양한 디바이스 크기에 최적화된 레이아웃 설계</span></p>
                    </div>
                </div>
            </li>
            
        </ProjectModalFunction>
        <ProjectModalGallery>
            <ProjectModalGalleryImage v-for="(item, i) in imageList" :key="i" :title="item.title" :src="item.src"
                @click="() => { selectedItemSrc = item.src }" />
        </ProjectModalGallery>
        <ProjectModalGalleryDetail :is-open="isModalOpen" @closeGallery="closeModal">
            <img :src="selectedItemSrc" />
        </ProjectModalGalleryDetail>
    </div>
</template>