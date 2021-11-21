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
`;
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${rotationA} 1s linear infinite;
`;


<Box />
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
    background-color: ${props => props.theme.textColor}; 
`;
```
