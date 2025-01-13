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
            <li>사용자가 DID<span class="text-gray-500">(Decentralized Identity, 분산신원확인)</span> 및 VC<span class="text-gray-500">(검증 가능한 자격 증명)</span>를 발급, 저장, 조회할 수 있는 기능을 제공
                <ul class="list-circle pl-5">
                    <li><Tag :is-skill="true" text="cypto.js" /> 라이브러리를 활용한 데이터 암호화 지원</li>
                    <li>Index DB를 사용하여 복잡한 구조의 DID, VC 데이터 저장</li>
                </ul>
            </li>
            <li>보유하고 있는 VC로 VP<span class="text-gray-500">(검증 가능한 프레젠테이션)</span>을 생성하여 인증기관에 검증 요청하는 기능을 제공
                <ul class="list-circle pl-5">
                    <li>ex) 사원증 및 출입증</li>
                    <li><Tag :is-skill="true" text="vue-qrcode" /> 라이브러리를 사용하여 VP 데이터를 QR code로 생성 및 리딩하는 기능 구현</li>
                </ul>
            </li>
        </ProjectModalOutline>
        <ProjectModalFunction>
            <li>index DB, <Tag :is-skill="true" text="dexie.js" />라이브러리를 활용하여 DID와 VC와 같이 복잡한 JSON 형태의 데이터를 저장 및 핸들링이 가능하도록 구현
                <ul class="my-2">
                    <div class="bg-zinc-200 px-3 py-2 rounded-lg">
                        <p class="mb-4 font-semibold">💡 로컬스토리지나 세션스토리지가 아닌 index DB를 사용한 이유</p>
                        <p class="break-words">DID와 VC와 같이 복잡한 JSON 형태의 데이터를 저장하고 관리하기 위해 IndexDB를 선택했습니다.<br />
                            Index DB는 로컬스토리지나 세션스토리지보다 구조화된 데이터 관리와 대량 데이터 처리에 유리합니다.</p>
                        <p class="mt-2 text-blue-500 cursor-pointer">관련 블로그 포스팅 보기</p>
                    </div>
                </ul>
            </li>
            <li>
                <Tag :is-skill="true" text="cypto.js" /> 라이브러리를 사용하여 사용자가 입력한 핀번호로 DID 및 VC 데이터를 암호화
                <ul class="list-circle pl-5">
                    <li>
                        브라우저에 저장된 DID 및 VC를 조회하고자 할 때 핀번호 입력 요구, 핀번호 불일치 시 조회 불가
                    </li>
                </ul>
            </li>
            <li>
                <Tag :is-skill="true" text="vue-qrcode" /> 라이브러리를 사용하여 VP JSON 데이터를 QR code로 생성,<br />QR reader를 통해 들어온 VP 데이터 파싱 후 검증 기능 구현</li>
        </ProjectModalFunction>
    </div>

</template>