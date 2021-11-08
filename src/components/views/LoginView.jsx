import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Alert from '../commons/Alert'
import Button from '../commons/Button'
import Container from '../commons/Container'
import Form from '../commons/Form'
import Input from '../commons/Input'
import Title from '../commons/Tittle'
import { setToken } from '../../redux/auth'
import { getToken } from '../../redux/auth/api'

const LoginView = ({ setToken }) => {
  let history = useHistory()

  const [user, setUser] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  })

  const [error, setError] = useState(false)
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = () => {
    getToken({ email: user.email, password: user.password })
      .then((data) => {
        setError(false)
        setToken(data.token)
        if (data.token) {
          history.push('/dashboard')
        }
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
  }

  return (
    <Container margin="50px 0">
      <Title>Ingreso a dashboard</Title>
      <Form>
        <Input
          type="email"
          name="email"
          value={user.email}
          error={!user.email}
          placeholder="Correo electronico"
          onChange={handleChange}
        />
        {error && !user.email && (
          <Alert text="Email es requerido" />
        )}
        <Input
          type="password"
          name="password"
          value={user.password}
          error={!user.password}
          placeholder="Contraseña"
          onChange={handleChange}
        />
        {error && !user.password && (
          <Alert text="Contraseña es requerida" />
        )}
        <Button onClick={handleLogin}>Ingresar</Button>
        {error && <Alert text="Datos inválidos" />}
      </Form>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  token: state.Auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
