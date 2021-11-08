import React, { useEffect } from 'react'
import Button from '../commons/Button'
import Title from '../commons/Tittle'
import { Container, Text } from './styles'

const Cover = () => {
  const scrollBy = () => {
    const selection = document.getElementById('selection')
    if (typeof window !== 'undefined') {
      window.scroll({
        top: selection.offsetTop - 80,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
  const stickyCar = () => {
    const cart = document.getElementById('cart')
    const selection = document.getElementById('selection')
    cart.style.display = 'none'
    const listener = () => {
      const scroll = window.scrollY > selection.offsetTop - 230
      const scrollMin = window.scrollY < selection.offsetTop - 230
      if (scroll) {
        cart.style.display = 'block'
      }
      if (scrollMin) {
        cart.style.display = 'none'
      }
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }

  useEffect(() => {
    stickyCar()
  }, [])

  return (
    <Container>
      <Title> Bienvenido a tu pizza app </Title>

      <Text>Crea tu pizza en instantes </Text>
      <Text> selecciona tu preparacion favorita o tu pizza de siempre</Text>
      <Button onClick={scrollBy} width="300px">
        Continuar
      </Button>
    </Container>
  )
}

export default Cover
