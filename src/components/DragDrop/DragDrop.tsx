import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { toDoState } from './atom'
import Board from './Board'

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Boards = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`

const DragDrop = () => {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = (info: DropResult) => {
    const { destination, source, draggableId } = info
    if (!destination) return
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드에서 움직였을 경우
      setToDos((allBoards) => {
        // 배열 카피 하기
        const copyToDos = [...allBoards[source.droppableId]] // 해당 key의 array 복사
        // 선택한 배열 자르기
        copyToDos.splice(source.index, 1)
        // 넣은위치로 item 다시 넣기
        copyToDos.splice(destination?.index, 0, draggableId)
        return {
          // 오브젝트니 리턴은 오브젝트로 반환 한다.
          ...allBoards, // 다른 모든 board들을 가져 온다.
          [source.droppableId]: copyToDos, // key 인  [source.droppableId]안에 copyToDos를 넣는다.
          // ...oldToDos 이게 핵심
        }
      })
    }
    if (destination.droppableId !== source.droppableId) {
      // 다른 보드로 이동 했을경우
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]
        const destinationBoard = [...allBoards[destination.droppableId]]
        sourceBoard.splice(source.index, 1)
        destinationBoard.splice(destination?.index, 0, draggableId)
        return {
          ...allBoards, // 다른 모든 board들을 가져 온다.
          [source.droppableId]: sourceBoard, //
          [destination?.droppableId as any]: destinationBoard,
        }
      })
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board
              key={boardId}
              boardId={boardId}
              toDos={toDos[boardId]}
            ></Board>
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default DragDrop
