import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, MenuContainer } from './styles'
import { connect } from 'react-redux'
import { setToken } from '../../../redux/auth'

function Menu({ setToken, token }) {
  return (
    <MenuContainer>
      <List>
      <ListItem>
            <Link to="/dashboard">ingresar a dashboard</Link>
          </ListItem>
        {token && (
          <ListItem>
            <div onClick={() => setToken('')}>cerrar sesión</div>
          </ListItem>
        )}
      </List>
    </MenuContainer>
  )
}

const mapStateToProps = (state) => ({
  token: state.Auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
