<script setup lang="ts">

// 원본 텍스트
const fullText1 = '기획부터 UI/UX·아키텍처·구현까지-'
const fullText2 = '서비스 전체 흐름을 책임지는 프론트엔드 개발자 최진경입니다.'

// 반응형 상태로 텍스트 선언
const animatedText1 = ref('')
const animatedText2 = ref('')
const isTyping = ref(true) // 커서 깜빡임 상태
const email = 'jinjinjara0610@gmail.com'
const copySuccess = ref(false)

// 텍스트 애니메이션 함수 (Promise로 구현)
function typeEffect(fullText: string, animatedText: typeof animatedText1, delay: number) {
  return new Promise<void>((resolve) => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        animatedText.value += fullText[index] // 반응형 상태 업데이트
        index++
      } else {
        clearInterval(interval)
        resolve() // 애니메이션 종료 후 resolve 호출
      }
    }, delay)
  })
}

// 이메일 복사 함수
function copyEmail() {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      copySuccess.value = true
      setTimeout(() => {
        copySuccess.value = false
      }, 1500)
    })
    .catch((err) => {
      console.error("이메일 복사 실패:", err)
    })
}

onMounted(async () => {
  // 첫 번째 텍스트 애니메이션 실행
  await typeEffect(fullText1, animatedText1, 70)

  // 첫 번째 텍스트가 끝난 뒤 두 번째 텍스트 실행
  await typeEffect(fullText2, animatedText2, 70)

  // 타이핑 완료 후 커서 멈춤
  isTyping.value = false
})
</script>

<template>
  <PageSection section-id="about-me">
    <div class="flex flex-col">
      <div class="lg:pb-10 pb-4 flex flex-col lg:flex-row gap-4 items-center lg:justify-between justify-center">
        <div class="w-60 lg:w-80">
          <img src="/portfolio/profile2.png" />
        </div>
        <div class="flex flex-col gap-4 lg:gap-10">
          <p class="text-center lg:text-left text-3xl lg:text-5xl font-extrabold tracking-wider">최진경</p>
          <div class="flex flex-col gap-4 lg:gap-6">
            <div class="flex flex-row items-center gap-2 justify-center lg:justify-start">
              <div class="lg:w-7 w-4">
                <img src="/portfolio/developer.png" />
              </div>
              <p class="text-center lg:text-left text-2xl lg:text-3xl font-semibold text-gray-700">Web Frontend
                Developer
              </p>
            </div>
            <Card class="leading-7 px-3 py-4 text-base lg:text-lg lg:w-135 min:w-86 tracking-tighter">
              <p>
                <span class="w-4 pr-2">🖐🏻</span>안녕하세요, {{ animatedText1 }}
                <span v-if="isTyping && !animatedText2" class="cursor" />
              </p>
              <p class="pl-6">
                {{ animatedText2 }}
                <span v-if="animatedText2" class="cursor"></span>
              </p>
            </Card>
            <div class="flex flex-row gap-2 items-center lg:justify-start cursor-pointer" @click="copyEmail()">
              <img src="/portfolio/mail.png" class="lg:w-7 w-4" />
              <span>{{ email }}</span>
            </div>
          </div>
        </div>
      </div>
      <Border />
      <PageSmallSection>
        <PageTitle>
          <template #icon="{ size }">
            <img src="/portfolio/interview.png" :class="[size]" />
          </template>
          <span>Interview</span>
        </PageTitle>
        <Interview>
          <template #question>
            Q. 본인의 <span class="font-bold bg-blue-100 text-gray-800">강점</span>이 뭐라고 생각하시나요?
          </template>

          <template #answer>
            <div class="bg-blue-100 rounded-lg p-2 mb-2">
              <ul class="list-disc pl-5 flex flex-col gap-2">
                <li>복잡한 도메인(Web3 기반 서비스)을 빠르게 분석하고 UI/UX로 풀어내는 능력</li>
                <li>SSR 기반 인증 구조, API 프록싱, 상태 관리 등 FE 아키텍처 설계 역량</li>
                <li>코드 스플리팅, 컴포넌트 렌더링 최적화(memoization) 등 성능 최적화 경험</li>
                <li>기획·디자인부터 개발·QA·배포·운영까지 전 과정을 책임질 수 있는 End-to-End 개발 경험</li>
                <li>API Playground와 같은 복잡한 인터랙션과 데이터 흐름을 가진 기능형 UI를<br />
                  화면 구조 설계부터 아키텍처까지 직접 설계하고 구현한 경험</li>
                <li>구조화된 데이터를 UI 레이어에서 안전하고 일관되게 처리한 경험</li>
              </ul>
            </div>
            저의 강점은 복잡한 요구사항을 빠르게 분석하고,
            기획부터 UI/UX 설계·아키텍처 구성·구현·운영까지
            프론트엔드 전반을 스스로 이끌어갈 수 있는 <span class="font-semibold">end-to-end 개발 역량</span>입니다.
            <br /><br />
            Vue.js·Nuxt.js·Next.js 기반의 다양한 프로젝트를 통해
            <span class="font-semibold">SSR 구조, 상태 관리, API 연동 아키텍처, 성능 최적화</span> 등
            프론트엔드의 핵심 요소들을 폭넓게 경험해왔습니다.
            <br /><br />
            특히 블록체인 기반 API와의 연동 경험을 통해,
            트랜잭션 생성 → 서명 → 전송 → 이벤트 조회로 이어지는 전체 흐름을 이해하고
            이를 사용자 경험 중심의 UI로 구현해본 실전 경험을 가지고 있습니다.
            <br /><br />
            또한 UX 플로우 설계 → UI 디자인 → FE 구조 설계 → 개발 → QA → 배포까지
            <span class="font-semibold">서비스 전체 생명주기를 직접 리드하며, 화면 개발을 넘어
              ‘완성도 있는 서비스’를 만드는 것을 목표</span>로 일해왔습니다.
            <br /><br />

            정리하면,
            <span class="font-semibold">
              “사용자 경험과 기술 구조를 함께 고민하고,
              실제 서비스 수준으로 구현할 수 있는 프론트엔드 개발자”
            </span>
            라는 점이 저의 가장 큰 경쟁력입니다.
          </template>
        </Interview>

        <Interview>
          <template #question>
            Q. 본인이 추구하는 <span class="font-bold bg-blue-100 text-gray-800">개발 가치</span>는?
          </template>
          <template #answer>
            <p class="font-semibold mb-1"><span class="bg-yellow-100">사용자가 ‘의도한 경험’을 그대로 전달하는 개발</span></p>
            저는 기능 구현 자체보다 <span class="font-semibold">사용자가 어떤 흐름으로 서비스를 경험하는지</span>를 우선순위로 둡니다.
            <br />BaaS와 같은 서비스 플랫폼을 개발해오면서 다양한 유형의 사용자 요구를 관찰해왔고, 그 과정에서 개발자가 편한 구조보다 <span class="font-semibold">사용자가
              자연스럽게
              이해하고 사용할 수 있는 UI/UX</span>가 결국 좋은
            서비스라는 확신을 가지게 되었습니다.

            <p class="font-semibold mt-5 mb-1"><span class="bg-yellow-100">제품 전체를 바라보는 엔드투엔드 관점</span></p>
            기획–설계–개발–배포–유지보수까지 전체 흐름을 이해하고 직접 참여해온 경험 덕분에,
            저는 단순히 화면을 만드는 개발자가 아니라 <span class="font-semibold">제품의 완성도를 함께 책임지는 사람</span>을 지향합니다.

            <br />특히 서비스 플랫폼 특성상 구조적 확장성과 유지보수성이 매우 중요한데,
            이를 고려한 아키텍처 설계와 컴포넌트 구조화에 강점을 가지고 있고,
            <span class="font-semibold">사용자 가치와 비즈니스 목표를 동시에 만족시키는 선택</span>을 늘 고민합니다.
          </template>
        </Interview>
      </PageSmallSection>
      <PageSmallSection>
        <PageTitle>
          <template #icon="{ size }">
            <img src="/portfolio/developer.png" :class="[size]" />
          </template>
          <span>Career</span>
        </PageTitle>
        <div class="w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center">
          <div class="flex flex-row gap-2 items-center">
            <img src="/portfolio/finger.png" class="w-15 mb-1" />
            <p>(주)핑거</p>
            <span class="text-gray-500">기술연구소</span>
          </div>
          <p class="text-right lg:text-left">
            <Tag text="웹 개발자로 근무중" class="mr-2" />
            2022.03 ~ 현재

          </p>
        </div>
        <div class="w-full flex lg:flex-row lg:justify-between flex-col gap-2 lg:items-center">
          <div class="flex flex-row gap-2 items-center">
            <img src="/portfolio/ssn.png" class="w-10 mb-1" />
            <p>서울특별시사회복지협의회</p>
          </div>
          <p class="text-right lg:text-left">
            <Tag text="직무변경 전 위생사로 근무" class="mr-2" />
            2018.04 ~ 2021.07
          </p>
        </div>
      </PageSmallSection>
    </div>
    <Alert title="이메일 주소가 복사되었습니다!" :isShow="copySuccess" @update-value="(value: boolean) => { copySuccess = value }" />
  </PageSection>
</template>

<style scoped>
/* 커서 스타일 */
.cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-bottom: 5px;
  padding: 0px;
  background-color: black;
  animation: blink 0.8s steps(2, start) infinite;
  vertical-align: bottom;
}

/* 깜빡임 애니메이션 */
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>