import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 4, 19, 0.8);
  overflow: auto;
  z-index: 3;
`

export const CloseButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  z-index: 0;
`

export const ModalContainer = styled.div`
  display: block;
  width: 50%;
  background: white;
  height: auto;
  margin: 20% auto;
  border-radius: 15px;
  padding: 5px 15px;
  position: relative;
  z-index: 1;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const Text = styled.div`
  margin: 40px 0;
  padding: 0 10px;
  text-align: center;
  font-size: 20px;
`
