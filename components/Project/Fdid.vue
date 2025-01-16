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
        <ProjectModalSummary :tags="['nuxt.js', 'pwa', 'swift UI', 'golang', 'docker']">
            <template #period>
                2024.02 ~ 2024.09
            </template>
            <template #team>
                프론트 개발자 1명(본인), 백엔드 개발자 2명
            </template>
            <template #part>
                웹 개발, 웹앱(ios) 개발, did library 개발 백업 업무
            </template>
        </ProjectModalSummary>
        <ProjectModalOutline>
            <li>PWA 기반의 웹사이트로 시작하여, 이후 사용자 요구에 따라 iOS 웹앱 버전으로 확장 개발</li>
            <li>사용자가 DID<span class="text-gray-500">(Decentralized Identity, 분산신원확인)</span> 및 VC<span
                    class="text-gray-500">(검증
                    가능한 자격 증명)</span>를 발급, 저장, 조회할 수 있는 기능을 제공
                <ul class="list-circle pl-5">
                    <li>
                        <Tag :is-skill="true" text="cypto.js" /> 라이브러리를 활용한 데이터 암호화 지원
                    </li>
                    <li>Index DB를 사용하여 복잡한 구조의 DID, VC 데이터 저장</li>
                </ul>
            </li>
            <li>보유하고 있는 VC로 VP<span class="text-gray-500">(검증 가능한 프레젠테이션)</span>을 생성하여 인증기관에 검증 요청하는 기능을 제공
                <ul class="list-circle pl-5">
                    <li>
                        <Tag :is-skill="true" text="vue-qrcode" /> 라이브러리를 사용하여 VP 데이터를 QR code로 생성 및 리딩하는 기능 구현
                    </li>
                </ul>
            </li>
        </ProjectModalOutline>
        <ProjectModalFunction>
            <li>
                <p class="font-semibold">IndexDB 및 Dexie.js를 활용한 복잡한 데이터 관리</p>
                <!-- <ul class="list-circle pl-5 mt-2">
                    <li class="text-base leading-7">
                        <p class="font-semibold">DID와 VC와 같은 복잡한 JSON 데이터 처리</p>
                        IndexDB는 객체 저장소(Object Store)를 통해 복잡한 JSON 구조의 데이터를 관리할 수 있으며, 데이터베이스처럼 동작하므로 로컬스토리지나 세션스토리지보다 ㅇ
                        프로젝트에서 DID와 VC 데이터를 저장하고 관리하기 위해 IndexDB를 사용했습니다.
                        <br/><Tag :is-skill="true" text="dexie.js" /> 라이브러리를 활용해 IndexDB의 복잡한 API를 간소화하고, 데이터 저장 및 핸들링의 효율성을
                        극대화했습니다.
                    </li>
                </ul> -->
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg text-base">
                        <p class="mb-4 font-semibold">💡 로컬스토리지나 세션스토리지가 아닌 index DB를 사용한 이유</p>
                        <div class="mt-2 ml-4">
                            <p class="font-semibold">1. 구조화된 데이터 관리</p>
                            <div class="pl-3 mt-1">
                                <span>웹 스토리지에 저장해야 할 정보가 DID, VC와 같이 복잡한 JSON 형식이므로, 문자열만 저장되는 세션스토리지나 로컬스토리지에 저장하기엔 부적합합니다. IndexDB는 객체 저장소(Object Store)를 통해 복잡한 JSON 구조의 데이터를 관리할 수 있으며, 데이터베이스처럼 동작하므로 보다 체계적입니다.</span>
                                <br />하지만 Index DB는 낮은 계층(low level)에서 동작하는 API이기 때문에 아주 간단한 데이터만 저장하려고 해도 복잡한 환경 설정을 했어야 했는데요, 이 점을 <Tag :is-skill="true" text="dexie.js" /> 라이브러리를 활용해 데이터 저장 및 핸들링의 효율성을 극대화할 수 있었습니다.
                            </div>
                        </div>
                        <div class="mt-2 ml-4">
                            <p class="font-semibold">2. 대량 데이터 처리</p>
                            <div class="pl-3 mt-1">
                                <span>로컬스토리지의 용량 제한(5~10MB)을 초과하는 데이터를 GB 단위로 저장 가능하며, 빠른 검색과 대규모 데이터 처리에 적합합니다</span>
                            </div>
                        </div>
                        <p class="mt-2 ml-4 text-blue-500 cursor-pointer hover:text-blue-600 duration-300"
                            @click="moveToWeb('https://jinnnkcoding.tistory.com/239')">관련 블로그 포스팅 보기</p>
                    </div>
                </ul>
            </li>
            <li>
                <p class="font-semibold">
                    <Tag :is-skill="true" text="cypto.js" /> 라이브러리를 사용하여 사용자가 입력한 핀번호로 DID 및 VC 데이터를 암호화</p>
                    <div class="pl-5 mt-2 text-base">
                        Crypto.js 라이브러리를 활용하여 사용자가 입력한 핀번호로 DID 및 VC 데이터를 AES(대칭키 암호화) 방식으로 암호화했습니다.<br />
                            브라우저에 저장된 데이터를 조회할 때 핀번호 입력을 요구하며, 핀번호가 일치하지 않으면 데이터 조회가 불가능하도록 설계했습니다. 아래는 사용자가 DID 정보를 저장하고 요청하는 시퀀스입니다.
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
                        <span class="text-base">QR Reader를 통해 전달받은 VP 데이터를 디코딩한 후, 인증서버에 전송하여 데이터 무결성을 검증하는 기능을 구현했습니다. 이를 통해 VP 데이터가 손상되거나 위변조되지 않았음을 확인할 수 있도록 했습니다.</span>
                    </li>
                </ul>
            </li>
            <li>
                <p class="font-semibold">PWA 기반의 웹 프로젝트로 개발</p>
                <div class="pl-1 text-base">네트워크 연결이 없는 상태에서도 <span class="font-semibold">Service Worker</span>를 활용하여 데이터를 로컬에서 캐싱하고 앱을 사용할 수 있도록 설계했습니다.<br />모바일 사원증을 불러오는 웹 프로젝트 특성 상 오프라인 환경에서도
                    작동해야 된다고 판단하여 이와 같이 기획하였습니다.</div>
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