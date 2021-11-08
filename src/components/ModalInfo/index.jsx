/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getAllOrders, removeAll } from '../../redux/orders'
import { nanoid } from 'nanoid'
import Button from './../commons/Button'
import { Label, Text } from './styles'
import Modal from '../commons/Modal'
import SubTitle from '../commons/SubTitle'

import Input from '../commons/Input'
import { addOrder } from '../../redux/ordersDashboard'

const ModalInfo = ({
  onClose,
  total,
  orders,
  setOrderDashboard,
  setInitialState,
}) => {
  const [nameUser, setNameUser] = useState('')
  const [phoneUser, setPhoneUser] = useState('')

  const handleOrder = () => {
    const order = {
      id: nanoid(4),
      nameUser: nameUser,
      phoneUser: phoneUser,
      orders: orders,
      totalPrice: total,
    }
    setOrderDashboard(order)
    onClose()
    setInitialState()
  }

  const handleChangeName = (e) => {
    setNameUser(e.target.value)
  }
  const handleChangePhone = (e) => {
    setPhoneUser(e.target.value)
  }
  return (
    <Modal onClose={onClose}>
      {total < 1 ? (
        <Text>
          Seleccione al menos una pizza para enviar su pedido
          <Button onClick={() => onClose()}>Aceptar</Button>
        </Text>
      ) : (
        <>
          <SubTitle>Formulario de envio</SubTitle>
          <Label>Nombre de quien recibe:</Label>
          <Input
            type="text"
            placeholder="Nombre"
            name="nameUser"
            onChange={handleChangeName}
            value={nameUser}
          />
          <Label>Telefono de contacto:</Label>
          <Input
            type="text"
            placeholder="Telefono"
            name="phoneUser"
            onChange={handleChangePhone}
            value={phoneUser}
          />
          <Text> Cantidad pizzas solicitadas: {orders.length} </Text>
          <Text> Precio total pedido: {total} </Text>
          <Button onClick={handleOrder}>Enviar</Button>
        </>
      )}
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
})

const mapDispatchToProps = (dispatch) => ({
  setOrderDashboard: (order) => dispatch(addOrder(order)),
  setInitialState: () => dispatch(removeAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalInfo)
