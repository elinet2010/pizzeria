import styled from 'styled-components'

export const WrapperSelection = styled.div`
  padding: 25px;
  min-height: 70vh;
  background: #f7f7f8cf;
  border-radius: 12px;
`

export const WrapperButton = styled.div`
  display: flex;
  margin: -15px;
  flex-wrap: wrap;
  width: 60%;
  button {
    margin: 13px;
    width: auto;
  }
  button.active {
    background-color: #a34e4e;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Base = styled.p`
  color: #a34e4e;
  margin: 20px 0 -20px 0;
`
