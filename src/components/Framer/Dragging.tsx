import { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const StyledBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const boxVariants = {
  hover: {
    scale: 1.5,
    rotate: 90,
  },
  click: {
    borderRadius: '100px',
    scale: 1,
  },
}

const Dragging = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null) // useRef로 htmldivelement 변수를 넣는다.
  return (
    <Wrapper>
      {/* biggerBoxRef를 ref로 소환하고 */}
      <BiggerBox ref={biggerBoxRef}>
        {/* whileDrag는 드래그 시 변경하는 옵션인데 색상은 rgba로 코드값을 전달해야 transition이 된다. */}
        <StyledBox
          drag
          //   dragSnapToOrigin // 움직임이 멈춘 후 다시 처음으로 돌아온다
          dragConstraints={biggerBoxRef} // biggerBoxRef를 부르면 해당 ref div안에서 움직이게 된다.
          // dragElastic={1} // 드래그 시 당기는 힘
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        ></StyledBox>
      </BiggerBox>
    </Wrapper>
  )
}

export default Dragging
