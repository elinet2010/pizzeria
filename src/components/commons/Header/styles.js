import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #4F4F4F;
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px;
  position: fixed;
  z-index:  2;
  @media (max-width: 767px) {
    display: block;
    justify-content:center;
  }
`

