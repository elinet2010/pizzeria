import styled from 'styled-components'

export const H2 = styled.h2`
  color: ${(props) => (props.color ? props.color : '#501c1c')};
  height: auto;
  font-size: 25px;
  padding: 12px 0;
`
