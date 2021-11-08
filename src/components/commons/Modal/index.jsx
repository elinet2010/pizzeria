import React from 'react'
import { ModalOverlay, ModalContainer, Text, CloseButton } from './styles'

/**
 *
 * @param {component} children
 *  @param {function} onClose
 * @returns
 */
function Modal({ children, onClose }) {
  return (
    <ModalOverlay>
        <CloseButton onClick={() =>onClose()}/>
      <ModalContainer>
        <Text>{children}</Text>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
