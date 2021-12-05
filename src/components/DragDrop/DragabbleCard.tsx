import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import React from 'react'

const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
`

interface IDragabbleCardProps {
  toDo: string
  index: number
}
const DragabbleCard = ({ toDo, index }: IDragabbleCardProps) => {
  return (
    // draggableId와 key값은 무조건 같아야 한다.
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  )
}
export default React.memo(DragabbleCard)
