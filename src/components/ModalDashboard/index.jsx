/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Button from './../commons/Button'
import Modal from '../commons/Modal'
import SubTitle from '../commons/SubTitle'
import { InfoDashboard } from '../Cart/styles'

const ModalDashboard = ({ onClose, info }) => {
  return (
    <Modal onClose={onClose}>
      <SubTitle>Información pedido</SubTitle>
      <InfoDashboard>
        <p>
          Nombre usuario:{' '}
          <span>{info.userName ? info.userName : 'Sin nombre'} </span>{' '}
        </p>
        <p>
          Telefono: <span>{info.userPhone} </span>{' '}
        </p>
        <p>
          Precio total pedido: <span>{info.totalPrice} </span>{' '}
        </p>
        <p>Pizzas solicitadas: </p>
        {info.orders.map((order) => (
          <div key={order.id}>
            <p>------</p>
            <p>
              Tipo de pizza:
              <span>
                {order.type === 'personalized' ? 'Personalizada' : 'Sugerida'}
              </span>
            </p>
            <p>
              Nombre pizza: <span>{order.name} </span>
            </p>
            <p>
              Nombre pizza: <span>{order.name} </span>
            </p>
            {order.type === 'personalized' && (
              <>
                Ingredientes:
                {order.pizza.map((p, i) => (
                  <p key={i}>
                    {i + 1}. <span> {p.name}</span>
                  </p>
                ))}
              </>
            )}
          </div>
        ))}
      </InfoDashboard>
      <Button onClick={() => onClose()}>Aceptar</Button>
    </Modal>
  )
}

export default ModalDashboard
