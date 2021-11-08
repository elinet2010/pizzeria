import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: relative;
`
export const ToggleButton = styled.div`
  padding: 15px;
`
export const ToggleContainer = styled.div`
  padding: 15px;
  position: absolute;
  background: lightcyan;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  @media (max-width: 767px)  {
    justify-content: space-between;
  }
`

export const ListItem = styled.li`
  margin: 0 3px;
  font-size: 16px;
  a,
  div {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 15px;
    display: block;
    @media (max-width: 767px) {
      padding: 10px 9px;
    }
  }

  @media (max-width: 767px) {
    font-size: 14px;
    border-left: 1px solid grey;
    margin: 9px  0;
  }
`
