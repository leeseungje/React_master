# 기능 넣기

## styled-components

### as

- button태그에 as="a"로 하면 a태그로 대체 되는 기능

```javascript
const Btn = styled.button``

<Btn>버튼</Btn>
<Btn as="a" href="/">링크</Btn> // 버튼으로 지정했지만 a태그로 바뀐다.
```

### attrs

- styled-components에 강제로 attrs를 추가 할 수 있다.

```javascript
const Input = styled.input.attrs({ required: true })`
    background-color: tomato;
`

<Input /> // 자동으로 required가 들어간다.
<Input />
<Input />
<Input />
<Input />
<Input />
```

### keyframes

- 변수로 키프레임을 저장하고 불러서 애니메이션 효과를 만들어주는 기능

```javascript
const rotationA = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationA} 1s linear infinite;
`

;<Box />
```

### theme

- theme를 실행할려면 index.js에서 ThemeProvider 호출 해야 한다.

Index.js

```javascript
import { ThemeProvider } from 'styled-components';

const darkTheme = { // textColor, borderColor, linkColor, linkHoverColor 등등 다양 하다.
    textColor: 'whitesmoke',
    backgroundColor: '#111',
};

<React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>
</React.StrictMode>,
```

App.js

```javascript
// theme를 props로 부를 수 있다.
const Box = styled.div`
  background-color: ${(props) => props.theme.textColor};
`
```

## @types?

아주 큰 Github repository로 모든 유명한 npm 라이브러리를 가지고 있는 저장소

- 여기서 라이브러리나 패키지의 type definition을 알려줌 [링크](https://github.com/DefinitelyTyped/DefinitelyTyped)

## interface

객체모양을 Typescript에게 설명해주는 개념

1. 우리 자신과 props를 interface를 사용하여 보호
2. object를 어떤식으로 보일 지 설명해 주는 역할

## Default Theme

theme.ts에서 default 테마 정하는 방법
`<ThemeProvider theme={theme}>`에서 기본적인 테마를 정할 수 있다.

- `src/assets/styles/styled.d.ts`

```javascript
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string; // 필요한 옵션을 더 넣을 수 있다.
    bgColor: string;
    btnColor: string;
  }
}
```

- `src/theme.ts`

```javascript
import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  bgColor: 'white', // styled.d.ts 에서 쓰였던 기본적인 테마 적용
  textColor: 'black',
  btnColor: 'tomato',
}

export const darkTheme: DefaultTheme = {
  bgColor: 'black',
  textColor: 'white',
  btnColor: 'teal',
}
```

이렇게 설정하면 index에서 `ThemeProvider` 호출이 가능하다.

-`/src/index.tsx`

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme' // theme 호출

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

## form 이벤트

[클릭 이벤트 링크](https://ko.reactjs.org/docs/events.html#form-events)

## useParams

브라우저 url의 파라미터 값을 전달 받는다.
