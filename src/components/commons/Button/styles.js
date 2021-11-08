import styled from 'styled-components'

export const Wrapper = styled.button`
  background: ${(props) => (props.bg ? props.bg : '#FF7900')};
  width: ${(props) => (props.width ? props.width : '100%')}; 
  color: ${({ theme }) => theme.colors.white};
  height: ${(props) => (props.height ? props.height : 'auto')} ;
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : '50px auto 30px auto')};
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  outline: none;
  border: none;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 3px 5px 6px;
  float:${(props) => (props.float ? props.float  : 'none')} ;
  &:hover {
    transition: all 0.3s;
    opacity: 0.85;
  }
`
