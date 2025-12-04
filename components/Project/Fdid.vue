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
        title: '회원가입 화면',
        src: '/portfolio/fdid2.png'
    },
    {
        title: 'VC 발급 화면',
        src: '/portfolio/fdid3.png'
    },
    {
        title: 'VP 생성 화면',
        src: '/portfolio/fdid4.png'
    },
    {
        title: '관리자 페이지-VC 관리 화면',
        src: '/portfolio/fdid-admin-vc.png'
    },
    {
        title: '관리자 페이지-VC 등록 화면',
        src: '/portfolio/fdid-admin-vc_register.png'
    },
    {
        title: '블록체인 대시보드-VP 관리 화면',
        src: '/portfolio/fdid-admin-vp.png'
    },
]
</script>
<template>
    <div class="flex flex-col">
        <ProjectModalSummary :tags="['nuxt.js', 'pwa', 'docker']">
            <template #period>
                2024.02 ~ 2024.09
            </template>
            <template #team>
                프론트 개발자 1명(본인), 백엔드 개발자 2명
            </template>
            <template #part>
                UI/UX 디자인 및 프론트엔드 개발<span class="text-gray-500 lg:text-base text-sm">(100%)</span>, did library 개발 백업 업무
            </template>
        </ProjectModalSummary>
        <ProjectModalOutline>
            <p class="font-semibold leading-7 mb-3">
                본 프로젝트는 PWA 기반으로 개발되어
                모바일 환경에서도 빠르고 안정적으로 동작할 수 있도록
                화면 설계 · UX 플로우 · 캐싱 전략까지
                <span class="font-semibold text-blue-600">모바일 중심으로 최적화한 서비스</span>입니다.
                기획 → UX 설계 → UI 디자인 → 프론트엔드 개발까지
                엔드투엔드로 직접 참여한 프로젝트입니다.
            </p>
            <li>
                DID<span class="text-gray-500">(분산신원확인)</span> 및 VC<span class="text-gray-500">(검증 가능한 자격 증명)</span>의
                발급 · 저장 · 조회 기능 제공
                <ul class="list-circle pl-5">
                    <li>
                        <Tag :is-skill="true" text="crypto.js" /> 기반 AES 암호화를 적용한 안전한 데이터 저장
                    </li>
                    <li>IndexDB + Dexie.js를 활용한 복잡한 JSON 데이터 구조 저장</li>
                </ul>
            </li>

            <li>
                보유 VC로 VP<span class="text-gray-500">(검증 가능한 프레젠테이션)</span> 생성 및 인증 기관 검증 요청
                <ul class="list-circle pl-5">
                    <li>
                        <Tag :is-skill="true" text="vue-qrcode" /> 활용
                        VP 데이터를 QR Code로 생성 및 리딩하여 안전한 데이터 전달 지원
                    </li>
                </ul>
            </li>

        </ProjectModalOutline>

        <ProjectModalFunction>
            <li>
                <p class="font-semibold">IndexDB 및 Dexie.js 기반의 로컬 데이터베이스 설계</p>
                <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base leading-7">
                    <p class="mb-4 font-semibold">💡 왜 로컬스토리지/세션스토리지 대신 IndexDB를 사용했는가?</p>

                    <p class="font-semibold ml-2">1. 복잡한 구조의 DID·VC 데이터 보관을 위한 스키마 기반 저장소 필요</p>
                    <div class="pl-5 mt-1">
                        DID와 VC는 여러 단계로 중첩된 JSON 형태로, 이 데이터를 문자열 기반의
                        localStorage/sessionStorage로 저장하는 것은 구조적·보안적 한계가 있다고 판단했습니다.
                        <br />
                        IndexDB는 객체 저장소를 기반으로 하는
                        <span class="font-semibold">브라우저 내장 NoSQL DB</span>로,
                        구조화된 데이터를 안정적으로 저장하고 조회할 수 있는 장점이 있습니다.
                        다만 IndexDB의 복잡한 트랜잭션 API 대신
                        <Tag :is-skill="true" text="Dexie.js" />를 사용해 데이터 저장·조회 흐름을 더 직관적인 구조로 재구성했습니다.
                    </div>

                    <p class="font-semibold mt-4 ml-2">2. 대량 데이터 처리 가능 (GB 단위)</p>
                    <div class="pl-5 mt-1">
                        실제 테스트 과정에서 VC 발급 시 복잡한 메타데이터가 누적되면서 로컬스토리지의 용량 한계를 금방 초과하게 되었습니다.
                        IndexDB를 활용함으로써 용량 제약 없이 데이터를 관리할 수 있었고,
                        검색·조회 속도 또한 안정적으로 유지할 수 있었습니다.
                    </div>

                    <p class="mt-2 ml-4 text-blue-500 cursor-pointer hover:text-blue-600 duration-300"
                        @click="moveToWeb('https://jinnnkcoding.tistory.com/239')">
                        관련 블로그 포스팅 보기
                    </p>
                </div>
            </li>

            <li>
                <p class="font-semibold">
                    <Tag :is-skill="true" text="cypto.js" /> 라이브러리를 사용하여 사용자가 입력한 핀번호로 DID 및 VC 데이터를 암호화
                </p>
                <div class="pl-5 mt-2 text-base">
                    사용자가 입력한 핀번호로 DID 및 VC 데이터를 AES(대칭키 암호화) 방식으로 암호화했습니다.<br />
                    브라우저에 저장된 데이터를 조회할 때 핀번호 입력을 요구하며, 핀번호가 일치하지 않으면 데이터 조회가 불가능하도록 설계했습니다. 아래는 사용자가 DID 정보를 저장하고 요청하는
                    시퀀스입니다.
                </div>
            </li>
            <img src="/portfolio/sequence.png" />
            <li>
                <p class="font-semibold">
                    <Tag :is-skill="true" text="vue-qrcode" /> 라이브러리를 활용한 VP 데이터 처리
                </p>
                <ul class="list-circle pl-5 text-base">
                    <li class="mt-2">
                        <p class="font-semibold mb-1">VP 데이터의 QR Code 생성 및 검증</p>
                        <span>
                            <Tag :is-skill="true" text="vue-qrcode" /> 라이브러리를 활용하여 VP의 JSON 데이터를 QR Code로 생성했습니다.<br />
                            사용자는 생성된 QR Code를 통해 VP 데이터를 다른 시스템으로 전달할 수 있습니다.
                        </span>
                    </li>
                    <li class="mt-2">
                        <p class="font-semibold mb-1">QR Reader와 데이터 검증</p>
                        <span class="text-base">QR Reader를 통해 전달받은 VP 데이터를 디코딩한 후, 인증서버에 전송하여 데이터 무결성을 검증하는 기능을 구현했습니다.
                            이를 통해 VP
                            데이터가 손상되거나 위변조되지 않았음을 확인할 수 있도록 했습니다.</span>
                    </li>
                </ul>
            </li>


            <li>
                <p class="font-semibold">PWA 기반으로 모바일 환경에서도 안정적으로 동작하도록 설계</p>
                <div class="pl-1 text-base leading-7">
                    모바일 신원증명 서비스 특성상 오프라인 환경에서도 정보를 조회해야 했기 때문에,
                    <span class="font-semibold">Service Worker 기반 캐싱</span>을 적용하여
                    네트워크가 없는 상태에서도 VC(검증 가능한 자격 증명)를 확인할 수 있도록 구현했습니다.
                    <br />
                    또한 화면 구성과 상호작용 요소를 모바일 중심으로 설계해,
                    앱처럼 자연스럽게 사용할 수 있는 <span class="font-semibold">모바일 최적화 UX</span>를 제공하였습니다.
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