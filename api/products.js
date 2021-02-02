import { create } from "apisauce"
import config from "../config"
import cache from '../utility/cache';

const api = create({ baseURL: config.endpoint.products });

const get = api.get;

api.get = async (url, params, axiosConfig) => {
  try {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
      cache.store(url, response.data);

      return response;
    }

    const data = await cache.get(url);

    return data ? { ok: true, data } : response;
  } catch (error) {
    console.error(error);
  }
}

const getProductsApi = () => api.get('/');

const getProduct = productId => api.get('/' + productId);

const ProductsApi = {
  getProductsApi,
  getProduct
}

export default ProductsApi;
