import Axios from "axios";

export const getAllCategories = async () => {
   const response = await Axios.get('https://fakestoreapi.com/products/categories');
   return response.data;
}

export const getAllProducts = async () => {
    const response = await Axios.get('https://fakestoreapi.com/products');
   return response.data;
}

export const getAllCategoryProducts = async (category) => {
    const response = await Axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
}