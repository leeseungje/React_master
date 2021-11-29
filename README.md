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

## useRouteMatch

유저가 특정한 url에 있는지 여부 파악

## react Query

각 컴포넌트에서 데이터를 호출 했다면 api.ts에서 하나로 묶어서 필요할때 부를수 있는 방식
데이터를 유지하기 때문에 속도가 빠르다.

`api.ts`

```javascript
export async function fetchCoins() {
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) =>
    response.json(),
  )
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000)
  const startDate = endDate - 60 * 60 * 24 * 7 * 2
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
  ).then((response) => response.json())
}
```

`Charts.tsx`

```javascript
interface IHistorical {
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}
const { isLoading, data: dataSource } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    },
  )
```

## Recoil

부모를 통해서 props를 받고 state값을 변경하기에 너무 불필요한 요소가 너무 많이 들어가서
`Recoil`을 통해서 value가 필요한 component만 그 value값을 가지게 하는 방식
Recoil은 버블이라 부르지 않고 `Atom`이라고 부른다

- `index.tsx`

```javascript
import { RecoilRoot } from 'recoil' // RecoilRoot 추가
;<RecoilRoot>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</RecoilRoot>
```

- `src/routes/atom.ts` 생성

```javascript
import { atom } from 'recoil'

export const isDarkAtom = atom({
  // atom을 추가 하면 반드시 key 값과 default값이 필요 하다.
  key: 'isDark', // 이름
  default: false, // value 값을 변경 시켜주는 역할
})
```

### useRecoilValue

atom의 value를 갑지하기 위해서 useRecolValue hook을 사용

```javascript
import { useRecoilValue } from './atom'

const isDark = useRecoilValue(isDarkAtom) // false
```

### useSetRecoilState

atom의 value를 useState 처럼 값을 변경해주는 역할을 한다.

```javascript
import { useSetRecoilState } from './atom'

const setterFn = useSetRecoilState(isDarkAtom)

<button onCLick={() => setterFn(!isDark)}>
```

## react-hook-form

많은폼이 있는경우에 코드가 무궁무진하게 많지만 이 모든 걸 단 할 줄의 코드로 가능하게 만들어 주는 기능

큰 폼이 있을경우 매우 유용한 기능

```javascript
import React, { useState } from 'react'

function TodoList() {
  const [toDo, setToDo] = useState('')
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setToDo(value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(toDo)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoList
```

- `useForm` 이용하면

```javascript
import { useForm } from 'react-hook-form'

interface IFrom {
  email: string
  firstName: string
  lastName: string
  userName: string
  password: string
  password1: string
  extraError?: string
}

function TodoList() {
  const {
    register, // input값 관리를 쉽게 해준다.
    handleSubmit, // onSubmit에서 값을 제대로 받았는지 체크해 준다.
    formState: { errors }, // errors에 formState값을 할당 받고 실시간으로 에러 체크를 해준다.
    setError,
  } = useForm<IFrom>({
    defaultValues: {
      // value값을 default로 넣어주기
      email: '@naver.com',
    },
  })
  const onValid = (data: IFrom) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        { message: '패스워드가 같지 않습니다.' },
        { shouldFocus: true },
      ) // password가 둘다 같지 않을 경우 password1에 message를 띄운다.
      // shouldFocus는 자동으로 focus가 가도록 한다.
      // setError('extraError', { message: 'Server 다운' }) // Form의 전체에 문제가 일어날때 에러를 띄운다.
    }
  }
  console.log(errors)
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: '이메일을 필히 입력하세요.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: '이메일 `naver.com` 형식이 틀립니다.',
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              // validate는 내가 원하는 걸 일치 하지 않을때 통과 시키지 않을 수 있다.
              noLeeseungje: (value) =>
                value.includes('leeseungje')
                  ? 'leeseungje 이름은 중복 입니다.'
                  : true,
              noMyubbak: (value) =>
                value.includes('myubback')
                  ? 'myubback 이름은 중복 입니다.'
                  : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('userName', {
            required: true,
            minLength: {
              value: 5,
              message: 'username을 최소 5글자 이상 작성 하시오.',
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: '비밀번호가 최소 5글자 이상 작성 하시오',
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password1 is required',
            minLength: {
              value: 5,
              message: '비밀번호가 최소 5글자 이상 작성 하시오',
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  )
}

export default TodoList
```

1. `watch()`로 input에 있는 모든 값을 저장 시켜 준다.
2. `register` input값 관리를 쉽게 해준다.
3. `handleSubmit` onSubmit에서 값을 제대로 받았는지 체크해 준다.
4. `formState: { errors }` errors에 formState값을 할당 받고 실시간으로 에러 체크를 해준다.
5. `setError`: 에러가 있는 부분을 실시간으로 체크해 준다.
