# wanted_pre_onboarding

## 1. 구현된 컴포넌트 확인 방법

### 1) Vercel로 배포된 페이지

🔗 http://wanted-pre-onboarding-chi.vercel.app/

### 2) 레포지토리 클론

```
git clone https://github.com/Moon-Ga/wanted_pre_onboarding.git
cd wanted_pre_onboarding
npm install
npm start
```

## 폴더 구조

```
📁src
├─ 📁components
│  ├─ Dropdown.js
│  ├─ Input.js
│  ├─ Slider.js
│  ├─ Tab.js
│  └─ Toggle.js
├─ 📁data
│  └─ DropdownData.js
├─ App.css
├─ App.js
└─ index.js
```

## 2. 구현 방향성

재사용성을 위해 `props`를 활용할 수 있도록 구현하였습니다.

## 3. 컴포넌트 별 설명

### 1) Toggle

| Props      | Default            | Description                                                                            |
| ---------- | ------------------ | -------------------------------------------------------------------------------------- |
| `usage`    | `"toggle"`         | 토글 버튼에 고유성을 부여합니다. 토글 버튼이 한 화면에 여러 개일 때 설정해줘야 합니다. |
| `label`    | `["기본", "상세"]` | 토글 버튼의 좌와 우에 들어갈 단어의 배열입니다.                                        |
| `disabled` | `true`             | 토글 버튼의 활성화 여부를 결정합니다.                                                  |
