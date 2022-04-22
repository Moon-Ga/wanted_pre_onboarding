# 원티드 프리온보딩(wanted_pre_onboarding)

## 1. 구현된 컴포넌트 확인 방법

### 1) Vercel로 배포된 페이지

🔗 http://wanted-pre-onboarding-chi.vercel.app/

컴포넌트의 작동을 확인해 볼 수 있는 페이지입니다.

### 2) 레포지토리 클론

```
git clone https://github.com/Moon-Ga/wanted_pre_onboarding.git
cd wanted_pre_onboarding
npm install
npm start
```

컴포넌트의 `props`를 수정해 보는 등 더 세세하게 작동을 확인해 볼 수 있습니다.

## 2. 폴더 구조

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

- 모든 컴포넌트는 components 폴더에 모아두었습니다.
- Dropdown 컴포넌트에서 사용될 데이터의 코드 길이가 길기 때문에 data 폴더의 DropdownData.js로 분리하였습니다.

## 3. 구현 방향성

- 모든 컴포넌트들은 상황에 맞게 구현해야 하지만 우선은 최소한의 재사용성을 고려하며 `props`를 활용하였습니다.
- 컴포넌트 작동에 필요한 함수와 변수들을 여러 개로 분리하고 의미 있는 이름을 붙여줌으로써 각각이 어떤 작동을 하는지 파악하기 쉽도록 하였습니다.
- 성능을 고려하여 불필요한 재렌더링을 최소화 하려 노력했습니다.

## 4. 컴포넌트 별 설명

※ Props에서 💡이 붙은 것은 반드시 입력해줘야 합니다.

### 1) Toggle

| Props            | Default | Type    | Description                                                                                     |
| ---------------- | ------- | ------- | ----------------------------------------------------------------------------------------------- |
| `usage`💡        |         | string  | 버튼에 고유성을 부여합니다. 버튼이 한 화면에 여러 개일 때 반드시 각각 다르게 설정해줘야 합니다. |
| `isToggled`💡    |         |         | 버튼에 사용될 `state`입니다.                                                                    |
| `setIsToggled`💡 |         |         | 버튼에 사용될 `state`를 변경할 `setState`입니다.                                                |
| `label`          |         | string  | 버튼의 좌와 우에 들어갈 단어의 배열입니다.                                                      |
| `disabled`       | `true`  | boolean | 버튼의 활성화 여부를 설정합니다.                                                                |

- 구현 방법
  - 토글 버튼에 대한 state는 버튼의 내부가 아닌 외부에서 props로 보내야 한다고 생각하여 App.js에서 state를 작성하였습니다.

### 2) Tab

| Props    | Default     | Type  | Description                               |
| -------- | ----------- | ----- | ----------------------------------------- |
| `tabs`💡 | `[1, 2, 3]` | array | 탭으로 나타날 내용을 설정하는 배열입니다. |

### 3) Slider

| Props           | Default | Type   | Description                                        |
| --------------- | ------- | ------ | -------------------------------------------------- |
| `min`💡         | `0`     | number | 최소값을 설정합니다.                               |
| `max`💡         | `100`   | number | 최대값을 설정합니다.                               |
| `step`💡        | `1`     | number | 슬라이더 한 틱의 값을 설정합니다.                  |
| `buttonCount`💡 | `5`     | number | 슬라이더 하단의 버튼을 몇 개로 나눌 지 설정합니다. |

### 4) Dropdown

| Props         | Default  | Type   | Description                                                |
| ------------- | -------- | ------ | ---------------------------------------------------------- |
| `list`💡      |          | array  | 드롭다운에 들어갈 내용을 설정하는 배열입니다.              |
| `placeholder` |          | string | 드롭다운을 펼치기 위한 `input`의 placeholder를 설정합니다. |
| `direction`   | `'down'` | string | 드롭다운을 펼쳤을 때, 펼쳐질 방향을 설정합니다.            |

### 5) Input

| Props      | Default            | Type | Description                                                                            |
| ---------- | ------------------ | ---- | -------------------------------------------------------------------------------------- |
| `usage`    | `"toggle"`         |      | 토글 버튼에 고유성을 부여합니다. 토글 버튼이 한 화면에 여러 개일 때 설정해줘야 합니다. |
| `label`    | `["기본", "상세"]` |      | 토글 버튼의 좌와 우에 들어갈 단어의 배열입니다.                                        |
| `disabled` | `true`             |      | 토글 버튼의 활성화 여부를 결정합니다.                                                  |
