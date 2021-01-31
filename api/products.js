import { create } from "apisauce"
import config from "../config"

const api = create({ baseURL: config.endpoint.products });

const getProductsApi = () => api.get('/');

const getProduct = productId => api.get('/' + productId);

const ProductsApi = {
  getProductsApi,
  getProduct
}

export default ProductsApi;