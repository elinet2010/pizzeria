import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getAllOrders } from '../../redux/ordersDashboard'
import Button from '../commons/Button'
import Card from '../commons/Card'
import { ItemCard } from '../commons/Card/styles'
import Container from '../commons/Container'
import Title from '../commons/Tittle'
import ModalDashboard from '../ModalDashboard'

function Dashboard({ ordersDashboard }) {
  const [modal, setModal] = useState(false)
  return (
    <Container>
      <Title> Lista de Pedidos</Title>
      <Card>
        <ItemCard title>Id </ItemCard>
        <ItemCard title>Nombre </ItemCard>
        <ItemCard title>Telefono</ItemCard>
        <ItemCard title>Total pedido </ItemCard>
        <ItemCard></ItemCard>
      </Card>
      {ordersDashboard &&
        ordersDashboard.map((order, i) => {
          return (
            <Card key={order.id}>
              <ItemCard>
                {i + 1}-{order.id}
              </ItemCard>
              <ItemCard> {order.nameUser}</ItemCard>
              <ItemCard>{order.phoneUser}</ItemCard>
              <ItemCard>{order.totalPrice}</ItemCard>
              <ItemCard>
                <Button onClick={() => setModal(true)} margin="0">
                  ver mas
                </Button>
              </ItemCard>
              {modal && (
                <ModalDashboard onClose={() => setModal(false)} info={order} />
              )}
            </Card>
          )
        })}
    </Container>
  )
}
const mapStateToProps = (state) => ({
  ordersDashboard: getAllOrders(state),
})

export default connect(mapStateToProps)(Dashboard)
