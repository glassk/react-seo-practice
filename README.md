# 프로젝트 개요

- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅

- `npm install` 실행
- `npm start` 실행 후 [http://localhost:3000/](http://localhost:3000/)에 접속합니다.

## Favicon 세팅

### 각 파일의 역할

- `favicon.ico`: 브라우저 탭, 북마크 바, 주소 표시줄 등에서 사용되는 웹사이트의 기본 아이콘. 일반적으로 16x16, 32x32, 48x48 픽셀 크기의 아이콘을 포함한 멀티 사이즈 파일.
- `favicon-16x16.png`, `favicon-32x32.png`: 대부분의 현대 브라우저에서 사용하는 표준 크기의 파비콘.
- `apple-touch-icon`: Apple iOS 디바이스에서 웹사이트를 홈 스크린에 추가할 때 사용되는 아이콘. 다양한 크기의 디바이스에 맞는 최적의 표시를 위해 사용됨.
- `android-icon`: 안드로이드 기기에서 웹 애플리케이션을 홈 화면에 추가할 때 사용되는 아이콘.
- `apple-icon`: 애플 iOS 기기에서 사파리 브라우저를 통해 웹사이트를 방문하거나 웹사이트를 홈 화면에 추가할 때 사용되는 아이콘.
- `ms-icon`: 윈도우 8 이상에서 시작 화면이나 작업 표시줄에 웹사이트를 고정할 때 사용되는 아이콘.
- `browserconfig.xml`: Internet Explorer 11 및 Microsoft Edge(레거시)에서 사용되는 XML 구성 파일. 웹사이트를 윈도우 시작 메뉴에 고정할 때 사용되는 타일 이미지, 배경 색상 등을 정의함.
- `manifest.json`: 웹사이트의 이름, 아이콘, 시작 URL 등 메타 정보를 정의하며 Progressive Web Apps (PWA)를 만들기 위한 구성 요소 중 하나.

## SEO 스코어 분석

- 스코어 분석에 사용한 서비스: https://www.seobility.net/en/seocheck

<img width="1045" src="https://github.com/glassk/react-seo-practice/assets/63575891/d66ec4ad-85d2-4c96-b865-f868d2b0d0a0" alt="SEO Score 분석 결과" />

### 개선점

- <b>Add a H1 heading to this page.</b> : 각 웹 페이지에는 명확하고, 관련성 높은 내용을 담은 하나의 `<h1>` 태그가 있어야 한다. `<h1>` 태그는 검색 엔진에게 페이지의 주제를 알려주는 역할을 한다. 페이지의 가장 중요한 키워드를 포함시키는 것이 좋다.
- <b>Use good headings on the page.</b>: `<h2>`, `<h3>`, ... `<h6>` 태그 등을 사용하여 페이지 내용을 적절히 구조화한다. 하위 제목들은 사용자와 검색 엔진이 콘텐츠를 더 쉽게 이해하게 돕는다. 중요한 키워드를 하위 제목에 포함시키되, 자연스럽고 읽기 쉬운 방식으로 구성해야 한다.
- <b>This page has only few internal links. If it's a welcome page, consider removing it.</b>: 내부 링크를 통해 사용자가 웹사이트 내 다른 관련 페이지로 쉽게 이동할 수 있게 하고, 검색 엔진이 사이트 구조를 이해하게 돕는다. 더 많은 내부 링크를 추가한다.
- <b>Improve the text of the meta description.</b>: 페이지 내용과 관련성 높은 키워드를 포함시키되, 스팸처럼 보이지 않도록 자연스러운 문장을 사용한다. 일반적으로 메타 설명은 160자 이내로 작성하는 것이 좋다.
- <b>The page title should be better suited to the content of the page.</b>: 제목은 짧고 명확하며, 페이지 내용을 정확히 반영해야 한다. 보통 60자 내외로 페이지의 주요 키워드를 포함시키는 것이 좋다.

## 미리보기

<img width="752" src="https://github.com/glassk/react-seo-practice/assets/63575891/ff563fa3-6284-4363-8a48-2b78cb9dcd8c" alt="홈 페이지" />

<img width="752" src="https://github.com/glassk/react-seo-practice/assets/63575891/676d1aa3-13f4-49c0-b0ee-44fc66d042a4" alt="정보 페이지" />
