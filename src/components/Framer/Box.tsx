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
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Box = () => {
  return (
    <Wrapper>
      <StyledBox
        transition={{ type: 'spring', damping: 5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      ></StyledBox>
    </Wrapper>
  )
}

export default Box
