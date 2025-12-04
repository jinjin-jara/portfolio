import { useRouter } from 'vue-router'
export const projects = [
  // {
  //   id: 'incheontp',
  //   tags: ['nuxt.js', 'minio', 'spring boot'],
  //   title: '인천특구플랫폼 블록체인 플랫폼 개발',
  //   desc: `개발자가 API를 쉽게 사용할 수 있는 API Developer 웹과, 트랜잭션 추적을 위한 모니터링 웹을 개발하였습니다.<br />
  //        프로젝트의 전체 구축 및 운영에 투입되었습니다.`,
  //   image: '/portfolio/incheontp.png',
  // },
  {
    id: 'baas',
    tags: ['next.js', 'figma'],
    title: 'Baas 플랫폼 개발',
    desc: `블록체인을 모르는 사용자들도 블록체인 서비스를 쉽게 경험할 수 있는 서비스형 플랫폼 웹을 Next.js로 구축하였습니다.`,
    image: '/portfolio/f-baas.png',
    noImage: false,
  },
  {
    id: 'did',
    tags: ['nuxt.js', 'pwa'],
    title: 'DID 프로젝트',
    desc: `PWA 기반의 DID(Decentralized Identity, 분산신원확인) 웹 페이지 개발 후, 웹 앱(IOS)로 리팩토링하였습니다.`,
    image: '/portfolio/fdid.png',
    noImage: false,
  },
  {
    id: 'token',
    tags: ['nuxt.js'],
    title: '비상장 토큰 증권 플랫폼 개발',
    desc: `비상장 토큰을 거래할 수 있는 거래 플랫폼 웹과 트랜잭션을 추적할 수 있는 모니터링 웹을 개발하였습니다.`,
    image: '/portfolio/trade.png',
    noImage: false,
  },
  {
    id: 'asset',
    tags: ['nuxt.js'],
    title: 'f-asset 플랫폼 웹 개발',
    desc: `이용자 각종 자산을 충전하고 특정 자산으로 결제/송금 처리가 가능한 플랫폼 웹을 개발하였습니다.`,
    image: '/portfolio/fplatform.png',
    noImage: false,
  },
  {
    id: 'wallet-refactor',
    tags: ['vue.js'],
    title: '전자지갑 웹 리팩토링 (jQuery → Vue.js)',
    desc: `jQuery로 구현된 전자지갑 웹을 vue.js로 리팩토링하였습니다.`,
    noImage: true,
  },
  // {
  //   id: 'patent',
  //   tags: ['jQuery', 'spring boot'],
  //   title: '특허권 조각투자 플랫폼 개발',
  //   desc: `블록체인 기술을 활용하여 특허권리를 거래할수 있는 특허권 조각투자 플랫폼 웹을 개발하였습니다.`,
  //   image: '/portfolio/ipnft.png',
  // },
  // {
  //   id: 'nft-marketplace',
  //   tags: ['jQuery', 'spring boot'],
  //   title: '이더리움 전자지갑 + NFT 마켓플레이스 웹 개발',
  //   desc: `사용자들이 NFT를 발행, 조회, 전송할 수 있는 기능을 제공하며, jQuery와 Spring Boot 기반의 웹을 개발하였습니다.`,
  //   image: '/portfolio/wallet.png',
  // },
]

export function getTitleById(projectId: string) {
  const project = projects.find((p) => p.id === projectId)
  return project ? project.title : ''
}

export function customRoute(
  path: string,
  query?: Record<string, string | number | undefined> | null,
  hash?: string
) {
  const router = useRouter()
  if (query) {
    const urlSearchParams = new URLSearchParams()
    for (const key in query) {
      let value = query[key]
      if (typeof value === 'undefined') value = ''
      urlSearchParams.append(key, value.toString())
    }
    path += `?${urlSearchParams}`
  }
  if (hash) {
    path += `#${hash}`
  }
  router.push(path)
}

export function getQueryValue(key: string): string {
  const route = useRoute() // 현재 경로 정보 가져오기

  // 쿼리에서 해당 키의 값을 가져옴
  const value = route.query[key] as string | undefined

  return value ?? '' // 값이 없으면 null 반환
}
export function moveToWeb(url: string) {
  window.open(url)
}
