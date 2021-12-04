import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: blue;
  border-radius: 100px;
`

const Layout = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }
  return (
    <Wrapper onClick={handleClick}>
      <StyledBox
        style={{
          justifyContent: `${visible ? `flex-start` : 'center'}`,
          alignItems: `${visible ? `flex-start` : 'center'}`,
        }}
      >
        {/**
         * @layout 을 추가 하면 transition이 자동으로 추가가 되어서 애니메이션이 된다.
         */}
        <Circle layout />
      </StyledBox>
      {/**
       * @layoutId 가 같으면 신기한 기능이 된다.
       */}
      <StyledBox>
        {visible && <Circle layoutId="circle" style={{ borderRadius: 50 }} />}
      </StyledBox>
      <StyledBox>
        {!visible && (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        )}
      </StyledBox>
    </Wrapper>
  )
}
export default Layout
