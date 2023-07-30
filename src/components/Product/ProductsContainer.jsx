import React, { useState, useEffect } from "react";

import { getAllProducts, getAllCategoryProducts } from "../../services";

import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

import "./Product.css";

function ProductsContainer({ category, searchKeyword }) {
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState();
  const [filteredProductsList, setFilteredProductsList] = useState();

  const search = (text, searchText) => {
    if (!searchText) {
      return true;
    }
    const textWords = text.toLowerCase().split(/\W+/);
  const searchWords = searchText.toLowerCase().split(/\W+/);
  return searchWords.every((searchWord) =>
    textWords.includes(searchWord)
  );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data =
        category === "All"
          ? await getAllProducts()
          : await getAllCategoryProducts(category);
      setProductsList(data);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    if (!searchKeyword) {
      setFilteredProductsList(productsList);
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      const filteredData = await productsList.filter(
        (item) =>
          search(item.title, searchKeyword) ||
          search(item.description, searchKeyword)
      );
      setFilteredProductsList(filteredData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchKeyword, productsList]);

  const displayProducts = searchKeyword ? filteredProductsList : productsList;

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="category-heading">
        <h1>{category === "All" ? "All Products" : category}</h1>
      </div>
      <div className="products-container">
        {displayProducts?.length > 0 ? (
          displayProducts.map((product) => <ProductCard details={product} key={product.id}/>)
        ) : (
          <div>
            <h4 className="error-message">
              OOPS! No result found. Try searching some other keyword.
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
