import { Y as s } from "./CBMe6_VQ.js";
const o = [
  {
    id: "baas",
    tags: ["next.js", "figma"],
    title: "Baas 플랫폼 개발",
    desc: "블록체인을 모르는 사용자들도 블록체인 서비스를 쉽게 경험할 수 있는 서비스형 플랫폼 웹을 Next.js로 구축하였습니다.",
    image: "/portfolio/f-baas.png",
    noImage: !1,
  },
  {
    id: "did",
    tags: ["nuxt.js", "pwa"],
    title: "DID 프로젝트",
    desc: "PWA 기반의 DID(Decentralized Identity, 분산신원확인) 웹 페이지 개발 후, 웹 앱(IOS)로 리팩토링하였습니다.",
    image: "/portfolio/fdid.png",
    noImage: !1,
  },
  {
    id: "token",
    tags: ["nuxt.js"],
    title: "비상장 토큰 증권 플랫폼 개발",
    desc: "비상장 토큰을 거래할 수 있는 거래 플랫폼 웹과 트랜잭션을 추적할 수 있는 모니터링 웹을 개발하였습니다.",
    image: "/portfolio/trade.png",
    noImage: !1,
  },
  {
    id: "asset",
    tags: ["nuxt.js"],
    title: "f-asset 플랫폼 웹 개발",
    desc: "이용자 각종 자산을 충전하고 특정 자산으로 결제/송금 처리가 가능한 플랫폼 웹을 개발하였습니다.",
    image: "/portfolio/fplatform.png",
    noImage: !1,
  },
  {
    id: "wallet-refactor",
    tags: ["vue.js"],
    title: "전자지갑 웹 리팩토링 (jQuery → Vue.js)",
    desc: "jQuery로 구현된 전자지갑 웹을 vue.js로 리팩토링하였습니다.",
    noImage: !0,
  },
];
function n(e) {
  const t = o.find((a) => a.id === e);
  return t ? t.title : "";
}
function r(e) {
  return s().query[e] ?? "";
}
function u(e) {
  window.open(e);
}
export { n as a, r as g, u as m, o as p };
