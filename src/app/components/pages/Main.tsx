import { useState } from 'react'
import { useProduct } from '../../hooks/useProduct'
import { IProduct } from '../../models/IProduct'
import Modal from '../ui/Modal'
import ProductCard from '../ui/ProductCard'

const Main = () => {
  const { products, getChepeastProduct } = useProduct()
  const [modalData, setModalData] = useState({} as IProduct)
  const [isOpen, setIsOpen] = useState(false)

  const buyProduct = (product: IProduct) => {
    setIsOpen(true)
    setModalData(product)
  }

  const buyCheapest = () => {
    setModalData(getChepeastProduct())
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className='main'>
        <div className='product-board'>
          {products.map((p) => (
            <ProductCard key={p.name} product={p} buyProduct={buyProduct} />
          ))}
        </div>
        <button className='main__cheapest-button' onClick={buyCheapest}>
          Buy cheapest
        </button>
      </div>
      <Modal product={modalData} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export default Main
