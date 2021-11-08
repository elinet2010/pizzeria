import React from 'react'
import Cart from '../Cart';
import Container from '../commons/Container'
import Cover from '../Cover';
import Selection from '../Selection'

function HomeView() {
 return (
    <Container>
      <Cover />
      <Selection />
      <Cart />
    </Container>
  )
}

export default HomeView
