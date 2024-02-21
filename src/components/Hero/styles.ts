import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
`
