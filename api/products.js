import { create } from "apisauce"
import config from "../config"

const api = create({ baseURL: config.endpoint.products });

const getProductsApi = () => api.get('/');

const ProductsApi = {
  getProductsApi
}

export default ProductsApi;