<script setup lang="ts">

// 원본 텍스트
const fullText1 = '안녕하세요. 웹 프론트엔드 개발자 최진경입니다.'
const fullText2 = '웹과 모바일 경계를 허물며, 사용자 경험과 기술적 완성도를 추구합니다.'

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
      <div
      class="lg:pb-10 pb-4 flex flex-col lg:flex-row gap-4 items-center lg:justify-between justify-center">
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
              <p class="text-center lg:text-left text-2xl lg:text-3xl font-semibold text-gray-700">Web Frontend Developer
              </p>
            </div>
            <Card class="leading-7 px-3 py-4 text-base lg:text-lg lg:w-135 min:w-86 tracking-tighter">
              <p>
                <span class="w-4 pr-2">🖐🏻</span>{{ animatedText1 }}
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
            저는 <span class="font-semibold">Nuxt.js</span>와 <span class="font-semibold">Vue.js</span>를 기반으로 한 프론트엔드 개발을
            전문으로 하며, PWA(Progressive Web App)와 iOS 웹앱(WebView) 등 <span class="font-semibold">웹과 모바일 환경 모두를 아우르는 통합적 솔루션을
              개발</span>해왔습니다. 또한, 프로젝트의 초기 설계 단계부터 UI/UX 디자인, 프론트엔드 구현, 백엔드 연동, 그리고 유지 보수까지 전반적인 개발 과정에 참여해, 완성도 높은 결과물을
            만들어왔습니다.
          </template>
        </Interview>
        <Interview>
          <template #question>
            Q. 본인이 추구하는 <span class="font-bold bg-blue-100 text-gray-800">개발 가치</span>는?
          </template>
          <template #answer>
            <p class="font-semibold mb-1">사용자 중심의 설계</p>
            저는 단순히 "작동하는 코드"를 넘어, 사용자가 원하는 경험을 제공하는 데 초점을 맞춥니다. 웹과 모바일 앱에서 동일한 인터페이스와 성능을 제공하기 위해 끊임없이 고민하며, 사용자 경험을
            최적화하는 데 주력합니다.

            <p class="font-semibold mt-4 mb-1">문제 해결을 위한 적극적 접근</p>
            새로운 기술을 배우고 기존 시스템을 개선하는 데 열정적입니다. 특히, 웹과 네이티브 환경의 연결과 같은 복잡한 과제를 해결하며 얻은 경험은 저를 한층 성장하게 했습니다.
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
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>