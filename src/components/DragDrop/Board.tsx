import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import DragabbleCard from './DragabbleCard'

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  min-height: 200px;
`
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`

interface IBoardProps {
  boardId: string
  toDos: string[]
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div
            style={{ backgroundColor: 'red' }}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {/* 해당 내용을 넣어야지 움직일때 높이가 고정이 된다. */}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  )
}

export default Board
