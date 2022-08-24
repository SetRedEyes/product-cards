import { IProduct } from '../../models/IProduct'

interface ProductCardProps {
  product: IProduct
  buyProduct: (product: IProduct) => void
}

const ProductCard = ({ product, buyProduct }: ProductCardProps) => {
  const { name, category, price } = product
  return (
    <div className='product-card'>
      <span className='product-card__category'>{category}</span>
      <h2 className='product-card__name'>{name}</h2>
      <div className='product-card__buy-section'>
        <div className='product-card__price'>{price}</div>
        <button
          className='product-card__button'
          onClick={() => buyProduct(product)}
        >
          Buy
        </button>
      </div>
    </div>
  )
}

export default ProductCard
