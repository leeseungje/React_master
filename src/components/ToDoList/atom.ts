import { atom, selector } from 'recoil'

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}
export interface IToDo {
  text: string
  id: number
  category: Categories
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
})

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
})

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState) // get을 함수로 사용하여 다는 변수를 덮어서 사용 가능 하다.
    const category = get(categoryState)
    return toDos.filter((toDo) => toDo.category === category)
  },
})
