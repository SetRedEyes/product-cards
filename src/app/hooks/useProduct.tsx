import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from '../models/IProduct'
import productService from '../services/product.service'

interface ProductContextProps {
  children: React.ReactNode
}

export interface IProductContext {
  products: IProduct[]
  getChepeastProduct: () => IProduct
  getProductByName: (name: string) => IProduct | undefined
}

const ProductContext = React.createContext<IProductContext | null>(null)

export const useProduct = () => {
  return useContext(ProductContext) as IProductContext
}

export const ProductProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState([] as IProduct[])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getProductsList()
  }, [])

  async function getProductsList() {
    try {
      const data = await productService.fetchAll()

      setProducts(data)
      setLoading(false)
    } catch (e) {
      if (e instanceof Error) {
        setError(e)
      }
    }
  }

  const getProductByName = (name: string) => {
    return products.find((p) => p.name === name)
  }

  const getChepeastProduct = ():IProduct => {
    return products.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    )
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        getChepeastProduct,
        getProductByName
      }}
    >
      {!isLoading && products.length ? children : 'LOADING'}
    </ProductContext.Provider>
  )
}
