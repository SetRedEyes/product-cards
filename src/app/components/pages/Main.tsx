import React, { useState } from 'react'
import { useProduct } from '../../hooks/useProduct'
import { IProduct } from '../../models/IProduct'
import Modal from '../ui/Modal'
import ProductCard from '../ui/ProductCard'

const Main = () => {
  const { products, getChepeastProduct, getProductByName } = useProduct()
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState({} as IProduct)

  const buyProduct = (product: IProduct) => {
    setModalData(product)
    setIsOpen((prevState) => !prevState)
  }

  const buyCheapest = () => {
    setModalData(getChepeastProduct())
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="main">
      {products.map((p) => (
        <ProductCard key={p.name} product={p} buyProduct={buyProduct}/>
      ))}
      <button onClick={buyCheapest }>Buy cheapest</button>
      {isOpen && <Modal product={modalData} />}
    </div>
  )
}

export default Main
