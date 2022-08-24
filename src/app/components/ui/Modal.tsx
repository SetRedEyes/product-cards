import React from 'react'
import { IProduct } from '../../models/IProduct'
interface ModalProps {
  product: IProduct
}

const Modal = ({ product }: ModalProps) => {
  const { name, category, price } = product

  return (
    <>
      {category}
      {name}
      {price}
    </>
  )
}

export default Modal
