import { useForm } from 'react-hook-form'
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'

interface IForm {
    toDo: string
}

interface IToDo {
    text: string
    id: number
    category: 'TO_DO' | 'DOING' | 'DONE'
}

const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: []
})

function TodoList() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const { register, handleSubmit, setValue } = useForm<IForm>()
    const handleValid = ({ toDo }: IForm) => {
        setToDos(oldToDos => [{ text: toDo, id: Date.now(), category: 'TO_DO' }, ...oldToDos])
        setValue('toDo', '') // 입력할때 마다 value값을 비워 준다.
    }
    console.log('toDos', toDos)
    return (
        <div>
            <h1>To Dos</h1>
            <br />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register('toDo', {
                        required: 'Please write a To Do'
                    })}
                    placeholder='Write a to do'
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
