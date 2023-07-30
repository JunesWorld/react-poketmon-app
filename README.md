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

## Debounce란?

검색 입력에 입력할 때 입력 결과가 나타날 때까지 지연이 있습니다. 이 기능은 Debounce라는 function에 의해 제어됩니다. 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트 처리를 지연시킵니다.  
이렇게 하면 UI 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 크게 줄어듭니다. 입력된 모든 문자를 처리하면 성능이 저하되고 백앤드에 불필요한 로드가 추가될 수 있습니다.
- hooks

## AutoComplete

AutoComplete 기능을 구현하기 위해서 검색을 했을 때 그에 관련된 이름들을 가져올 수 있게 서버에서 포켓몬 이름들을 전달 해주면 좋지만 그러한 api는 없습니다. 그러기에 이 기능을 구현하려면 프론트앤드에서 먼저 모든 포켓몬의 데이터를 가지고 있어야 합니다.

## React Router DOM

React Router DOM을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있습니다. 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍쳐와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 합니다.


[Install]
```bash
npm i react-router-dom --save
```

[설정하기]
- 가장 먼저 할 일은 앱 어디에나 React Router를 사용할 수 있도록 하는 것입니다.
- src 폴더에서 index.js 파일을 열고 react-router-dom에서 BrowserRouter를 가져온 다음 루트 구성요소(App 구성 요소)를 그 안에 래핑합니다.

## SPA(Single Page Application)

리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 가지고 있습니다. 이 하나의 템플릿에 자바스크립트를 이용해서 따른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 됩니다. 이 때 React Router DOM 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 주게 됩니다.


[BrowserRouter]  
- HTML5 History API(pushState, replaceState 및 popstate 이벤트)를 사용하여 UI를 URL과 동기화된 상태로 유지해줍니다. 


[Routes]  
- 앱에서 생성될 모든 개발 경로에 대한 컨테이너/상위 역할을 합니다.
- Route로 생성된 자식 컴포넌트 중에서 매칭되는 첫번째 Route를 렌더링해줍니다.

[Route]
- 단일 경로를 만드는 데 사용됩니다. 두가지 속성을 취합합니다.
- Path
  - 원하는 컴포는터의 URL 경로를 지정합니다. 이 경로 이름을 원하는 대로 정할 수 있습니다. 경로 이름이 백슬래시인 컴포넌트는 앱이 처음 로드될 때마다 먼저 렌더링됩니다. 이는 홈 구성 요소가 렌더링되는 첫 번째 구성 요소가 됨을 의미합니다.
- Element
  - 경로에 맞게가 렌더링되어야 하는 컴포넌트를 지정합니다.


[<Link />를 이용해 경로 이동]
- HTML의 앵커요소 <a/>와 유사
- 그것의 to 속성은 링크가 당신을 데려가는 경로를 지정
- 앱 구성 요소에 나열된 경로 이름을 생성했기 때문에 링크를 클릭하면 경로를 살펴보고 해당 경로 이름으로 구성 요소를 렌더링 합니다.


[중첩 라우팅(Nested Routes)]
- 이것은 React Router의 가장 강력한 기능 중 하나이므로 복잡한 레이아웃 코드를 어지럽힐 필요가 없습니다.
- 대부분의 레이아웃은 URL의 세그먼트에 연결되며 React Router는 이를 완전히 수용합니다.


[Outlet]
- 자식 경로 요소를 렌더링하려면 부모 경로에서 <Outlet>을 사용해야 합니다.
- 이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있습니다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링 하지 않습니다.
- react-router-dom에서 가져와서 사용합니다.


[useNavigate]
- 경로를 바꿔줍니다
- navigate('/home') ===> localhost:3000/home으로 갑니다.


[useParams]
- :style 문법을 path 경로에 사용하였다면 useParams()로 읽을 수 있습니다.


[useLocation]
- 이 Hooks는 현재 위치 객체를 반환합니다. 이것은 현재 위치가 변경될 때마다 일부 side effect를 수행하려는 경우에 유용할 수 있습니다


