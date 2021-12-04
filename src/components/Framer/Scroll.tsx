import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 500vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Scroll = () => {
  const x = useMotionValue(0) // 모션값을 default로 정한다.
  const rotate = useTransform(x, [-800, 800], [-360, 360]) // 왼쪽에서 나의 위치값에 맞게 오른쪽의 변형을 정한다.
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ],
  )
  // scrollY: 브라우저 스크롤 위치 px scrollYProgress: 브라우저 위치 진행 단계 %
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  return (
    <Wrapper style={{ background: gradient }}>
      <StyledBox
        style={{ x, rotate, scale }}
        drag="x"
        dragSnapToOrigin
      ></StyledBox>
    </Wrapper>
  )
}

export default Scroll
