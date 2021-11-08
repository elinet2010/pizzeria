import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #f5fcff;
  width: 100%;
  height: auto;
  padding: 15px;
  box-shadow: rgb(0 0 0 / 10%) -5px 5px 6px;
  margin: 10px 0;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
`

export const Text = styled.div`
  font-size: 20px;
  margin-right: 40px;
  @media (max-width: 767px) {
    margin-right: 10px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
`

export const ItemCard = styled.div`
  width: 20%;
  min-width: 20%;
  font-weight: ${(props) => (props.title ? 'bold': 'auto')} ;
  font-size: ${(props) => (props.title ? '20px': '16px')} ;
  @media (max-width: 767px) {
    font-size: 11px;
  }
`
