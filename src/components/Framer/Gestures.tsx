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
const StyledBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
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

const Gestures = () => {
  return (
    <Wrapper>
      <StyledBox
        variants={boxVariants}
        whileHover="hover" // 마우스 오버 시
        whileTap="click" // 마우스 클릭 시
      ></StyledBox>
    </Wrapper>
  )
}

export default Gestures
