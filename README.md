# React-poketmon-app

## Install

```bash
npm init vite (React + JavaScript)
npm i axios react-router-dom
npm i -D autoprefixer postcss tailwindcss
npm install
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
