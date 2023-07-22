import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import NewCard from "../components/NewCard";
import FilterProduct from "../components/FilterProduct";
const REACT_APP_API = "http://localhost:5000";

const ProductsListPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [demoProducts, setDemoProducts] = useState([]);

  const fetchAllProducts = async () => {
    const { data: allProducts } = await axios.get(
      `${REACT_APP_API}/admin/products/getAllProducts`
    );
    // console.log(allProducts.products);
    setAllProducts(allProducts.products);
    setDemoProducts(allProducts.products);
  };

  const fetchFilteredProducts = async (startVal = 0, endVal = 1000000) => {
    const { data: allProds } = await axios.get(
      `${REACT_APP_API}/admin/products/getAllProducts`
    );
    const prods = allProds.products;
    const priceRangeProducts = allProducts.filter(
      (prod) => prod.price >= startVal
    );
    console.log(priceRangeProducts);
    setDemoProducts(priceRangeProducts);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className="flex  gap-4">
      <FilterProduct fetchFilteredProducts={fetchFilteredProducts} />
      <div className="flex flex-col gap-10 my-16 px-32">
        <h2 className="text-4xl font-bold">Our Products</h2>
        <div className="grid grid-cols-5 gap-32 items-center ">
          {demoProducts.map((singleProduct) => (
            <NewCard key={singleProduct._id} singleProd={singleProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;
