import React from 'react'
import { Logo } from './styles'

const LogoComponent = ({ img, width, alt, ...props }) => {
  return (
    <Logo {...props}>
      <img src={'/' + img} width={width} alt="logo" />
      Mi app
    </Logo>
  )
}

export default LogoComponent
