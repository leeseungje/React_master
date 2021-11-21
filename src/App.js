import './App.css';
import styled, { keyframes } from 'styled-components';

const Father = styled.div`
    display: flex;
    background-color: ${props => props.theme.backgroundColor};
`;
const rotationA = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
    font-size: 36px;
    transition: 0.3s;
    &:hover {
        font-size: 98px;
    }
    &:active {
        opacity: 0;
    }
`;
const Box = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.textColor};
    animation: ${rotationA} 2s linear infinite;
`;
const Circle = styled(Box)`
    border-radius: 50px;
`;

function App() {
    return (
        <Father as="header">
            <Box bgColor="tomato">
                <Emoji as="p">😵‍💫</Emoji>
            </Box>
            <Box bgColor="gold">
                <Emoji as="p">😵‍💫</Emoji>
            </Box>
            <Circle bgColor="green">
                <Emoji as="p">😵‍💫</Emoji>
            </Circle>
        </Father>
    );
}

export default App;
