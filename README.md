
<div align="center">
  <br />
  <img width="126" alt="logo" src="https://user-images.githubusercontent.com/67556491/220362834-b25be8a0-a391-4941-b9e9-7f5a48b09fb9.png">
  <br />
  <h4>맛집을 공유할 수 있는 지도 서비스, 맛집일기 입니다.</h4>
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![NextJs](http://img.shields.io/badge/-Next.js-000?style=flat-square&logo=next.js&link=http://zi-gae.github.io/)
  ![SWR](https://img.shields.io/badge/-swr-000?style=flat-square&logo=next.js&link=http://zi-gae.github.io/)
  ![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
  
 [📍맛집일기 보러가기](https://sujin-map.vercel.app/)
  
</div>

<br />

```
✅ 해당 서비스는 Next.js로 제작 되었으며 Vercel을 통해 배포되었습니다.
✅ (23.02.21 기준) 1차 개발은 완료된 상태이며 앞으로 필요한 서비스를 계속해서 개발해 갈 예정입니다.
✅ (23.03.07 기준) 2차 개발은 더나은 서비스 제공을 위한 UI적인 부분을 보충했습니다.
```

## 기술 스택
### `Next.js`
<img width="80" alt="nextJs" src="https://user-images.githubusercontent.com/67556491/220366826-2a2fb563-bc9b-4c58-895c-0a958887ed13.png" />

- `React.js`의 단점 보완 및 다양한 최적화 지원으로 개발자 경험에 도움이 되어 사용
- `React.js` 의 CSR로 인한 SEO에 취약한 부분을  **`Next.js`의 pre-rendering을 통해 SSR, SSG를 가능하게 하여 SEO 최적화**를 보완
- 이외에도 **Dynamic Routing, client-side navigation, code splitting, image optimization**를 통해 프로젝트 성능을 전체적으로 향상

### `TypeScript`
<img width="70" alt="TypeScript" src="https://user-images.githubusercontent.com/67556491/220367785-05231ed8-7d19-4ee2-87ae-75ff66a3c71e.png" />

- 코드 작성시 데이터의 type을 미리 지정하여 **프로그램 실행 전에 미리 에러 방지**
- 변수의 이름뿐만 아니라 그 데이터의 type까지 알 수 있기 때문에 **코드 가독성이 좋아짐**
- 컴파일 과정에서 ES6+문법들을 ES5로 바꿔주기 때문에 Babel의 도움 없이도 **크로스브라우징 문제 해결**

### `SWR`
<img width="100" alt="SWR" src="https://user-images.githubusercontent.com/67556491/220367999-d93f48df-1bd9-44cf-bd7c-cb4a561f6b11.png" />

- `Next.js` 를 개발한 팀이 만든 상태 관리 라이브러리로, `react query`에 비행 진입 장벽이 낮고 **fetch속도가 빠르며 코드가 경량화** 되어 있어 간단한 프로젝트를 만들 때 사용하기 좋음
- 이 프로젝트에서는 최소한의 전역 상태 저장 용도로 사용

### `SCSS` + `style-components`
<div align="left">
<img width="80" alt="SCSS" src="https://user-images.githubusercontent.com/67556491/220368281-bcb83a8a-3cd0-4692-9ca8-37104f7f22d1.png" />
<img width="80" alt="style-components" src="https://user-images.githubusercontent.com/67556491/221363549-fdb0dbff-447e-4407-9dd3-c173033b8045.png"/>
</div>

- `CSS`의 불편한 점(불필요한 선택자, 연산 기능 한계, 구문의 부재 등) 해결 및 코드의 가독성과 재사용성을 위해 사용
- CSS-in-JS 방식을 통해 따로 `SCSS`파일을 생성하지 않고 해당 컴포넌트에서 스타일을 관리할 수 있도록 `style-components`를 도입

<br />

## 구현 기능

> 📅 **23.02.27**  <br />`Next.js`와 함께 **네이버 지도 API**를 사용하여 **저장된 맛집을 지도위에 표시하고 마커 선택 시 해당 맛집에 대한 상세 정보를 제공** 하며, <br /> 또한 지도 **URL 공유 기능**을 통해 다른 사람과 맛집 정보를 공유할 수 있습니다.

### 1. 지도 위에 맛집 나타내기

- **next/script API**를 이용하여 네이버 지도 API호출
- **Sprite marker image**로 마커 아이콘 지도에 표시
- **SWR**을 이용하여 매장 데이터 전역 상태로 관리

### 2. URL 공유하기

- **next/router**를 이용하여 URL로 상태 저장하여 공유하기 기능 구현

### 3. 맛집 상세페이지 구현하기

- **dynamic routes**와 **getStaticPath**를 이용하여 선택한 맛집에 대한 상세 페이지 구현

<hr /> 

> 📅 **23.03.07**  <br /> 공유를 위한 URL복사 완료를 알려주는 **알림창**, **매장 리스트 페이지**, 디테일 페이지에 **매장 별 지도 추가**하여 <br /> 높은 사용자 경험을 위한 UI개발을 진행했습니다.

### 

<br />

## 리팩토링
### 웹 성능, 웹 접근성, SEO 개선

- **images sizes** 설정을 통한 성능 개선
- **Link 태그에 aria-label 설정**을 통한 웹 접근성 개선
- **next-seo** 을 이용한 **title, descrption 설정** 및 SEO 개선
- **next-sitemap** 을 이용한 **사이트맵 설정** 및 SEO 개선

### Next.js API Routes로 맛집 데이터를 응답하는 GET API 만들기

- API 관련 로직과 나머지 Next.js 로직을 분리
- 서버의 URL이 바뀌어도 API Routes에 작성한 로직만 변경하면 되기 때문에 개발의 편의성을 높임

<br />

## 관련 블로그 포스팅
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=ahn-sujin&slug=Next.js-Data-Fetching&color=dark)](https://velog.io/@ahn-sujin/Next.js-Data-Fetching)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=ahn-sujin&slug=Next.js-초간단-Next.js에서-sitemap-만들기&color=dark)](https://velog.io/@ahn-sujin/Next.js-%EC%B4%88%EA%B0%84%EB%8B%A8-Next.js%EC%97%90%EC%84%9C-sitemap-%EB%A7%8C%EB%93%A4%EA%B8%B0)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=ahn-sujin&slug=TypeScript-왜-타입스크립트를-써야할까&color=dark)](https://velog.io/@ahn-sujin/TypeScript-%EC%99%9C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C)


