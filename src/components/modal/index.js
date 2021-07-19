import React from "react";
import ReacDom from "react-dom";
import { ModalContainer } from "./styles"

function Modal({ children }) {
  
  return (
    <ModalContainer>
      { children }
    </ModalContainer>
  )
}

export const ModalPortal = ({ children, setShowModal }) => {
  return ReacDom.createPortal(
    <Modal setShowModal={setShowModal}> {children} </Modal>,
    document.getElementById("modal"));
} 