import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import { HeaderContainer } from './styles'
import { useHistory } from 'react-router-dom'

function Header() {
  const history = useHistory()
  return (
    <HeaderContainer>
      <Logo img="images/logo.png" onClick={() => history.push('/')} />
      <Menu />
    </HeaderContainer>
  )
}

export default Header
