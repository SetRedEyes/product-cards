import { IProduct } from '../../models/IProduct'
import Form from './Form'
interface ModalProps {
  product: IProduct
  closeModal: () => void
  isOpen: boolean
}

const Modal = ({ product, closeModal, isOpen }: ModalProps) => {
  const { name, category, price } = product

  return (
    <div className={isOpen ? 'modal active' : 'modal'} onClick={closeModal}>
      <div
        className={isOpen ? 'modal-card active' : 'modal-card'}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='modal-card__close-button'
          onClick={closeModal}
        ></button>
        <span className='modal-card__product-category'>{category}</span>
        <h2 className='modal-card__product-name'>{name}</h2>
        <div className='modal-card__product-price'>{price}</div>
        <Form isOpen={isOpen} />
      </div>
    </div>
  )
}

export default Modal
