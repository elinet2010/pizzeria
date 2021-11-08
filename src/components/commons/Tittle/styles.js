import styled from 'styled-components'

export const H1 = styled.h1`
  color:  ${(props) => (props.color ? props.color : '#57ffca')}; 
  height: auto;
  text-align: center;
  padding-top: 25px;
  font-size: 38px;
`