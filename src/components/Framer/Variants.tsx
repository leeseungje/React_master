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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  place-self: center;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.4, // 자식요소에게 똑같은 시간으로 delay를 줄수 있다.
      staggerChildren: 0.2, // 자식요소에게 각자 다른 시간으로 delay를 줄수 있다.
    },
  },
}
const circleVariants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
}

const Variants = () => {
  return (
    <Wrapper>
      <StyledBox variants={boxVariants} initial="start" animate="end">
        {/* 부모가 intioal, animate를 설정 하면 자식은 자동으로 적용되므로 넣을 필ㅇㄹ효가 없다. */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </StyledBox>
    </Wrapper>
  )
}
export default Variants
