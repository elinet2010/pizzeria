/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { WrapperCart, TitleCart, ItemCart, DescriptionCart, ButtonDelete, ItemsContainer, Text} from './styles'
import { connect } from 'react-redux'
import { getAllOrders, removeOrder } from '../../redux/orders'
import Button from './../commons/Button'
import ModalInfo from '../ModalInfo'

const Cart = ({ orders, remove }) => {
  const [modal,setModal] = useState(false)
  const total = orders.reduce((total, arr) => total + arr.price, 0)
  return (
    <>
    <WrapperCart id="cart">
      <TitleCart>Mi pedido</TitleCart>
      <ItemsContainer>
      {orders.map((item) => (
        <ItemCart key={item.id}>
          <DescriptionCart>
          <p>Pizza: <span>{item.name}</span></p>
          <p>Precio: <span>{item.price}</span></p>
          </DescriptionCart>
          <ButtonDelete onClick={() => remove(item.id)}><img src="images/delete.png" alt="logo eliminar"/></ButtonDelete>
        </ItemCart>
      ))}
    </ItemsContainer>
    
      <Text>Precio Pedido: {total}</Text>

      <Button margin="20px 0" onClick={() => setModal(true)}> Enviar pedido</Button>
      
    </WrapperCart>
    
    {modal && <ModalInfo total={total} onClose={() => setModal(false)}></ModalInfo>}
    </>
  )
}

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
})

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeOrder(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
