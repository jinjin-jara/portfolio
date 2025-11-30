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
        title: '메인화면',
        src: '/portfolio/portfolio/asset0.png'
    },
    {
        title: 'API Playground',
        src: '/portfolio/portfolio/asset1.png'
    },
    {
        title: 'API Playground_검색기능',
        src: '/portfolio/portfolio/asset3.png'
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
                <span class="font-medium">F-Asset 홈페이지 바로가기</span>
                <span class="text-blue-500 text-base">테스트 아이디: finger@yopmail.com / 비밀번호: 1</span>
                <span class="text-sm">https://fassetchain-dev.fingerservice.co.kr</span>
            </p>
        </PageSmallSection>
        <ProjectModalOutline>
            <li>이용자 각종 자산을 충전하고 특정 자산으로 결제/송금 처리가 가능한 플랫폼</li>
            <li><span class="font-medium">핵심 기능</span>
                <ul class="list-circle pl-5">
                    <li>사용자 지갑의 거래·잔액 정보를 조회하고 관리할 수 있는 대시보드 제공</li>
                    <li>API Docs 화면을 통해 블록체인 API에 대한 문서 제공</li>
                    <li>콘솔 화면에서 API 요청 및 응답 실시간 테스트 기능</li>
                </ul>
            </li>
        </ProjectModalOutline>
        <ProjectModalFunction>
            <li>
                <p class="mb-1 font-medium">
                    HttpOnly 쿠키 기반 인증을 위한 SSR 인증 프록시 구조 구현
                </p>
                <div class="text-base leading-7">
                    클라이언트에서 토큰을 직접 다루지 않고,
                    <span class="font-semibold">서버 단(SSR)에서 HttpOnly 쿠키를 읽어</span>
                    accessToken/refreshToken을 자동 관리하는 구조를 설계했습니다.
                    <br />이를 통해 XSS 공격을 원천 차단하고,
                    API 서버와의 통신을 <span class="font-semibold">보안적으로 통제된 환경</span>에서 수행하도록 개선했습니다.
                    <br />또한 accessToken 만료 시 SSR에서 refreshToken으로 재발급까지 자동 처리하여 사용자에게
                    <span class="font-semibold">끊김 없는 인증 경험</span>을 제공했습니다.
                </div>
            </li>
            <li>
                <p class="mb-1 font-medium">
                    Nuxt 서버를 API Reverse Proxy로 활용하여 백엔드 API 완전 비공개 처리
                </p>
                <div class="text-base">
                    모든 API 요청은 클라이언트 → Nuxt 서버(WAS) → Backend 구조로 구성하여
                    백엔드 API 주소와 내부 네트워크 구조를 외부에 노출하지 않도록 설계했습니다.
                    <br />이를 통해 외부 접근 차단, API 서버 보호, 로깅/모니터링 체계 강화 등
                    <span class="font-semibold">보안성과 유지보수성을 극대화</span>하였습니다.
                </div>
            </li>


            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="nuxt plugin" />과
                    <Tag :is-skill="true" text="definePageMeta" />를 활용한 웹 내 페이지 검색 기능 구현
                </p>
                <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base">
                    nuxt plugin은 Nuxt 애플리케이션이 구동될 때 특정 코드나 외부 라이브러리를 초기화하고자 할 때 사용되는 개념입니다.
                    이 개념과 Nuxt에서 제공하는
                    <Tag :is-skill="true" text="definePageMeta" /> 메서드를 사용하여 메타 정보에 페이지 타이틀을 선언하여 페이지 검색 기능을 구현하였습니다.
                    <p class="mt-2 text-blue-500 cursor-pointer hover:text-blue-600 duration-300"
                        @click="moveToWeb('https://jinnnkcoding.tistory.com/237')">관련 블로그 포스팅 보기</p>
                </div>

            </li>
            <li>
                <p class="mb-1 font-medium">
                    블록체인 기반 자산 관리 API를 실시간으로 테스트할 수 있는
                    <span class="font-semibold">대화형 API Playground</span> 구축
                </p>
                <div class="text-base leading-7">
                    블록체인 API를 단순 문서 형태로 제공하는 것을 넘어,
                    사용자가 지갑 주소·자산·트랜잭션 파라미터를 입력하면
                    실제 API 요청을 전송하고 결과를 즉시 확인할 수 있는
                    <span class="font-semibold">실시간 테스트 콘솔 UI</span>를 구현했습니다.
                    <br /><br />

                    <Tag :is-skill="true" text="pinia" />를 도입하여 사용자의 선택 정보(개발 언어, SDK, 파라미터 등)를
                    전역 상태로 관리하고 페이지 이동·새로고침 후에도 상태를 유지함으로써,
                    안정적인 API 테스트 경험을 제공했습니다.
                    <br /><br />

                    또한
                    <Tag :is-skill="true" text="highlight.js" />를 활용해 실제 IDE와 유사한
                    구문 강조(syntax highlighting) 기능을 적용하여
                    API 사용 예제 코드를 가독성 높게 시각화하였습니다.
                    <br />
                    다만 초기 렌더링 시 한 번만 하이라이팅이 적용되는 라이브러리 특성 때문에,
                    사용자가 파라미터를 변경하면 하이라이팅이 사라지는 문제가 발생했습니다.
                    <br />
                    이 문제는 Nuxt의
                    <Tag :is-skill="true" text="watch" /> 기능을 활용해
                    입력 값 변경을 감지할 때마다 즉시 재하이라이팅을 수행하도록 처리하여
                    <span class="font-semibold">동적으로 변하는 코드 블록에서도 안정적인 하이라이팅</span>을 구현했습니다.
                    <br /><br />

                    이를 통해 블록체인 API를 처음 접하는 사용자와 개발자 모두가
                    <span class="font-semibold">직관적이고 신뢰도 높은 API 테스트 환경</span>을 경험할 수 있도록 개선하였습니다.
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
                    Docker 기반의 온프레미스 배포 환경 구성 및 Nginx 인증서 설정 경험
                </p>
                <div class="text-base">
                    서비스 운영을 위해 Docker로 Nuxt.js WAS를 컨테이너화하고,
                    로드밸런싱 및 SSL 처리를 위해 Nginx Reverse Proxy 환경을 구성했습니다.
                    <br />실제 서버 환경에서 인증서 갱신 및 Nginx 설정 변경까지 직접 수행하며
                    <span class="font-semibold">프론트엔드 개발자를 넘어선 서비스 운영 역량</span>을 확보했습니다.
                </div>
            </li>


            <li>
                <p class="mb-1 font-medium">
                    <Tag :is-skill="true" text="nuxt content" /> 모듈을 활용하여 Markdown 기반 API 문서를
                    구조화된 콘텐츠 API 형태로 자동 변환 및 렌더링
                </p>
                <div class="text-base leading-7">
                    Markdown 문서를 <span class="font-semibold">Nuxt Content</span>로 파싱하여,
문서 내용을 제목·본문·코드블록 등으로 구조화하고
이를 Vue 컴포넌트에서 그대로 사용할 수 있는 형태로 구성했습니다.
                    <br />


                    이를 통해 문서를 코드가 아니라 콘텐츠 파일로 관리할 수 있어
                    <span class="font-semibold">API 문서를 유연하게 추가하고 유지보수할 수 있는 CMS 기반 구조를 구축</span>했습니다.
                    <br />

                    또한
                    <Tag :is-skill="true" text="ContentQuery" /> 기능을 활용하여
                    제목, 태그, 경로 등 콘텐츠 메타데이터를 기준으로
                    <span class="font-semibold">문서 검색·필터링 기능</span>을 구현하였습니다.
                    이 덕분에 API 문서가 많아졌을 때도 사용자가 원하는 페이지를 빠르게 탐색할 수 있도록 하였습니다.
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
                    프로젝트 전반에 걸쳐 <span class="font-semibold">CSS 작성 시간을 약 70% 절감</span>하고, 일관된 디자인 시스템을 유지할 수 있었습니다.
                    <div class="ml-2 mt-2 bg-zinc-200 p-2 rounded-md">
                        <p>- 별도의 CSS 파일 없이 HTML에서 유틸리티 클래스를 사용해 <span class="font-semibold">즉각적인 스타일링</span>이 가능하여 작업 속도
                            향상</p>
                        <p>- 디자인 시스템(색상, 여백, 폰트 등)을 <span class="font-semibold">Tailwind의 테마
                                설정(tailwind.config.js)</span>으로
                            정의하여 <span class="font-semibold">재사용성과 유지보수성</span> 확보</p>
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