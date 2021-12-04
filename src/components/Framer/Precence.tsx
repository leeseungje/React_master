import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`
const StyledBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  end: {
    opacity: 0,
    y: 20,
  },
}

const Precence = () => {
  const [showing, setShowing] = useState(false)
  const toggleShowing = () => setShowing(!showing)
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click me</button>
      <AnimatePresence>
        {showing ? (
          <StyledBox
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="end"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  )
}
export default Precence
