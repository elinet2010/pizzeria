import styled from 'styled-components'

export const WrapperCart = styled.div`
  padding: 25px;
  position: fixed;
  background: rgb(80 50 50 / 55%);
  left: auto;
  height: 50%;
  top: 20%;
  color: white;
  right: 8%;
  width: 300px;
  border-radius: 12px;
  @media (max-width: 767px) {
    bottom: 0;
    width: 100%;
    right: 0;
    height: 10%;
    top: auto;
    padding: 5px;
    button {
      margin: 0 auto;
    }
  }
  
`
export const TitleCart = styled.div`
  color: #501c1c;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  text-decoration: solid;
  text-shadow: 1px 2px 6px #d3b295;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ItemsContainer = styled.div`
  height: 65%;
  overflow-y: auto;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ItemCart = styled.div`
  color: #501c1c;
  background: #f7f7f8cf;
  padding: 10px 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-weight: bold;
  span {
    font-weight: 500;
  }
`
export const DescriptionCart = styled.div`
  display: block;
`
export const Text = styled.div`
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  margin: 10px 0;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ButtonDelete = styled.div`
  display: block;
  cursor: pointer;
`

export const InfoDashboard = styled.div`
  color: #501c1c;
  background: #f7f7f8cf;
  padding: 10px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  height: 250px;
  overflow-x: auto;
  span {
    font-weight: 500;
  }
`
