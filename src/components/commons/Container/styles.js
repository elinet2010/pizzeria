import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  height: auto;
  padding: 0 15px;
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
`

export const WrapperFlex = styled.div`
  background: transparent;
  width: 100%;
  max-width: 320px;
  height: auto;
  padding: 25px 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
`
