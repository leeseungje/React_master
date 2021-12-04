import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`
const StyledBox = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 600px;
    height: 500px;
  }
`

const Grid = () => {
  const [id, setId] = useState<null | string>(null)
  return (
    <Wrapper>
      <StyledGrid>
        {['1', '2', '3', '4'].map((i) => (
          <StyledBox
            onClick={() => setId('popup' + i)}
            key={i}
            layoutId={'popup' + i}
          >
            {i}
          </StyledBox>
        ))}
      </StyledGrid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <StyledBox layoutId={id}>{id}</StyledBox>
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Grid
