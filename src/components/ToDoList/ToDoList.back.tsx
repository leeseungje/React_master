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
