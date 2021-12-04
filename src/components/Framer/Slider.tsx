import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #e09, #d0e);
`
const StyledBox = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 200px;
`
const box = {
  start: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  end: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.2,
    },
  }),
}

const Slider = () => {
  const [visible, setVisible] = useState(1)
  const [back, setBack] = useState(false)
  const nextButton = () => {
    setBack(false)
    setVisible((next) => (next === 10 ? 10 : next + 1))
  }
  const prevButton = () => {
    setBack(true)
    setVisible((prev) => (prev === 1 ? 1 : prev - 1))
  }
  return (
    <Wrapper>
      <button onClick={prevButton}>prev</button>
      {/**
       * @custom 클릭시 움직임이 다를때 custom을 사용 해야 한다.
       * @exitBeforeEnter 첫번째 애니메이션이 끝나면 다음 애니메이션이 실행
       */}
      <AnimatePresence exitBeforeEnter custom={back}>
        <StyledBox
          custom={back}
          variants={box}
          initial="start"
          animate="visible"
          exit="end"
          key={visible}
        >
          {visible}
        </StyledBox>
      </AnimatePresence>
      <button onClick={nextButton}>next</button>
    </Wrapper>
  )
}
export default Slider
