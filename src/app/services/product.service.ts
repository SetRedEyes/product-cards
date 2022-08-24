import httpService from './http.service'
import { IProduct } from '../models/IProduct'

const productEndpoint = '/'

const productService = {
  fetchAll: async () => {
    const { data } = await httpService.get<IProduct[]>(productEndpoint)
    return data
  }
}
export default productService
