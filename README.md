# React-poketmon-app

## Install

```bash
npm init vite (React + JavaScript)
npm i axios react-router-dom
npm i -D autoprefixer postcss tailwindcss
npm install
```

## Error

'require' / 'module' is not defined 해결
- .eslintrc 파일 내 env 설정 변경
  ```js
  module.exports = {
	"env": {
		"amd": ture, //require
		"node": true, //module
	}
  ```

## Vite

빌드 속도나 새로운 코드를 적용했을때 반영 속도 같은 Feedback 속도의 엄청난 개선  
[문제점]
- 브라우저에서 ES Module 사용할 수 있기 전에는 모듈화 된 방식으로 Javascript 작성하는 native 메커니즘이 없었다.
- 그래서 번들링이 필요.(Webpack, Rollup, Parcel등의 도구로 번들링 해결)
- 더 큰 앱을 위해 더 많은 JS사용 및 엄창나게 많은 모듈들이 사용
- 이로 인해 성능 병목 현상, 느린 서버 가동 속도, 느린 HMR로 파일 편집 반응 속도도 느려짐

[속도 개선]  
- 개발 서버를 스타트할 때 번들러 기반 빌드 설정은 서비스를 제공하기 전에 전체 어플리케이션을 열심히 크롤링하고 빌드해야 합니다.
- Vite는 먼저 어플리케이션의 모듈을 종속성(Dependencies)과 소스 코드의 두 가지 범주로 나누어 개발 서버 시작 시간을 개선합니다.
  - Dependencies
    - esbuild로 사전 번들링(Go로 제작되어 JS 번들 보다 10~100배 빠름)
  - Source Code
    - Native ESM을 통해 소스 코드 제공. 브라우저가 번들러 작업의 일부를 인계 받음. 브라우저가 요청할 때만 제공

[HMR(Hot Module Replace)]  
파일을 편집할 때 전체 번들을 다시 빌드하는 것이 아닌 페이지의 나머지 부분에 영향을 주지 않고 변경된 모듈 자체를 교체해서 빠르게 화면에 반영되게 하는 것
- Vite에서 HMR은 기본 ESM을 통해 수행됩니다.

## TailWindCSS

```bash
npx tailwindcss init
```

HTML 안에서, CSS style을 만들 수 있게 해주는 CSS Framework


CSS Framework?
- 레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는데 소요되는 시간을 최소화하기 위해 여러 웹 개발/디자인 프로젝트에 적용할 수 있는 CSS 파일 모듈
- 더 빠르게 애플리케이션을 스타일링 하는데 도움을 줍니다.


Tailwind CSS의 장점
- 부트스트랩과 비슷하게 미리 세팅된 Utility Class를 활용하는 방식으로 HTML에서 스타일링 할 수 있다.
- class or id명을 작성하기 위한 고생하지 않아도 된다.
- Utility class가 익숙해지는 시간이 필요할 수 있지만 IntelliSense Plugin이 제공돼서 금방 익숙해 질 수 있다.

## Image Lazy Loading

페이지 안에 있는 실제 이미지들을 바로 보여주는게 아닌 실제로 화면에 보일 필요가 있을 때 로딩을 할 수 있도록 하는 테크닉입니다.


[구현방법]
- Javascript 이벤트를 이용해서 구현
- Intersection Observer API를 이용해서 구현
- 브라우저 Native Lazy Loading 이용