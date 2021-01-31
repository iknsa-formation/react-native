import { create } from "apisauce"
import config from "../config"

const api = create({ baseURL: config.endpoint.products });

const getProductsApi = () => api.get('/');

const getProduct = () => api.get(config.endpoint.productDetails);

const ProductsApi = {
  getProductsApi,
  getProduct
}

export default ProductsApi;