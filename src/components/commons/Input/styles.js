import styled from 'styled-components'

export const Wrapper = styled.input`
  background: #fff;
  width:  ${(props) => (props.width ? props.width : '100%')};
  height: 40px;
  display: block;
  border-radius: 10px;
  margin: 25px -3px 0 -3px;
  font-size: 16px;
  padding: 0 3px;
  box-shadow: rgb(0 0 0 / 10%) 3px 5px 6px;
  border-color: ${(props) => (props.error ? '#ff8e8e' : 'transparent')};
  outline: none;
  @media (max-width: 767px) {
    width: 100%;
  }
`
