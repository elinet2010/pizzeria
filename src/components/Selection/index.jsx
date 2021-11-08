/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { pizzasList } from '../../constants/pizzasList'
import { WrapperSelection, WrapperButton, Base } from './styles'
import { connect } from 'react-redux'
import { addOrder, getAllOrders } from '../../redux/orders'
import SubTitle from '../commons/SubTitle'
import Button from '../commons/Button'
import Input from '../commons/Input'

const optionBase = pizzasList.personalized.base

const initialState = {
  option: 'personalized',
  price: optionBase.price,
  name: '',
  pizza: [],
}

const Selection = ({ setOrder, orders }) => {
  const [option, setOption] = useState(initialState.option)
  const [name, setName] = useState(initialState.name)
  const [pizza, setPizza] = useState(initialState.pizza)
  const [price, setPrice] = useState(initialState.price)

  const ingredientsList = pizzasList.personalized.ingredients
  const suggestedOptions = pizzasList.suggested.options

  const handleOption = (opt) => {
    setPizza(opt === 'personalized' ? [optionBase] : [])
    setOption(opt)
    setPrice(opt === 'personalized' ? optionBase.price : 0)
  }

  const handleChangeIngredients = (ingredient) => {
    let total
    let arr
    const isSetected = isAdded(ingredient.id)
    if (isSetected) {
      arr = pizza.filter((i) => i.id !== ingredient.id)
    } else {
      arr = [...pizza, ingredient]
    }
    total = arr.reduce((total, arr) => total + arr.price, 0)
    setPizza(arr)
    setPrice(total + optionBase.price)
  }

  const handleSuggest = (item) => {
    setPizza([item])
    setPrice(item.price)
  }

  const isAdded = (product) => {
    return pizza.some((item) => item.id === product)
  }

  const handleOrder = () => {
    const orderId = orders.length < 1 ? 1 : orders.length + 1
    const namepizza = name ? name : 'Personalizada'
    const order = {
      id: orderId,
      type: option,
      name: option === 'personalized' ? namepizza : pizza[0].name,
      price,
      pizza,
    }
    setOrder(order)
    setOption(initialState.option)
    setName(initialState.name)
    setPizza(initialState.pizza)
    setPrice(initialState.price)
  }

  const handledelete = () => {
    setPizza([])
    setPrice(optionBase.price)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <WrapperSelection id="selection">
      <SubTitle>Selecciona tu producto</SubTitle>
      <WrapperButton>
        {Object.keys(pizzasList).map((key) => (
          <Button
            className={key === option ? 'active' : ''}
            key={key}
            onClick={() => handleOption(key)}
            width="40%"
            bg="#b9a6a6"
          >
            {pizzasList[key].title}
          </Button>
        ))}
      </WrapperButton>
      <SubTitle>
        {option === 'personalized' ? 'La quiero con:' : 'Quiero:'}
      </SubTitle>
      <WrapperButton>
        {option === 'personalized'
          ? ingredientsList.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleChangeIngredients(item)}
                className={isAdded(item.id) ? 'active' : ''}
                bg="#b9a6a6"
              >
                {item.name}
              </Button>
            ))
          : suggestedOptions.map((item) => (
              <Button
                key={item.id}
                className={isAdded(item.id) ? 'active' : ''}
                onClick={() => handleSuggest(item)}
                bg="#b9a6a6"
              >
                {item.name}
              </Button>
            ))}
      </WrapperButton>
      {option === 'personalized' && (
        <>
          <Button
            onClick={handledelete}
            bg="#705e5e"
            width="20%"
            margin="30px 0"
          >
            Borrar todos
          </Button>

          <SubTitle>Ponle nombre a tu pizza </SubTitle>
          <Input
            type="text"
            placeholder="Nombre de mi pizza"
            width="50%"
            onChange={handleChangeName}
            value={name}
          />
          <Base>Precio base {optionBase.price} </Base>
        </>
      )}
      <SubTitle>Precio total de tu pizza {price} </SubTitle>

      <Button onClick={handleOrder} bg="#a34e4e">
        Añadir mi pizza
      </Button>
    </WrapperSelection>
  )
}

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
})

const mapDispatchToProps = (dispatch) => ({
  setOrder: (order) => dispatch(addOrder(order)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Selection)
