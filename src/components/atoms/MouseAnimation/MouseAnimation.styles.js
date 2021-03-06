import styled, { keyframes } from 'styled-components';

const mouseAnimation = keyframes`
	0% {
		opacity: 1;
		top: 29%;
	}
	15% {
		opacity: 1;
		top: 50%;
	}
	50% {
		opacity: 0;
		top: 50%;
	}
	100% {
		opacity: 0;
		top: 29%;
	}
`;

export const Wrapper = styled.div`
  & > *:hover,
  & > *:focus,
  & > *:active,
  & > *.active {
    opacity: 0.8;
    filter: alpha(opacity=80);
  }
`;

export const Mouse = styled.span`
  position: relative;
  display: block;
  width: 35px;
  height: 55px;
  margin: 0 auto 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid ${({ theme }) => theme.colors.black.thirty};
  border-radius: 23px;

  & > * {
    position: absolute;
    display: block;
    top: 29%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    background: ${({ theme }) => theme.colors.black.thirty};
    border-radius: 50%;
    -webkit-animation: ${mouseAnimation} 2.5s linear infinite;
    -moz-animation: ${mouseAnimation} 2.5s linear infinite;
    animation: ${mouseAnimation} 2.5s linear infinite;
  }
`;
