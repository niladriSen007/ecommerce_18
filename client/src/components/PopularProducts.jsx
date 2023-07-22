import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "./NewCard";

const REACT_APP_API = "http://localhost:5000";
const PopularProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const fetchAllProducts = async () => {
    const { data: allProds } = await axios.get(
      `${REACT_APP_API}/admin/products/getAllProducts`
    );
    console.log(allProds.products);
    setAllProducts(allProds.products);
    const popProd = allProducts.slice(0, 6);
    setPopularProducts(popProd);
  };

  console.log(popularProducts);

  useEffect(() => {
    fetchAllProducts();
  }, [popularProducts,allProducts]);

  return (
    <div  className="my-16 px-64">
      <p className="text-4xl font-semibold">Our Popular Products </p>
      <div className="grid grid-cols-4 gap-12 items-center my-16 ">
        {popularProducts?.map((singleProduct) => (
          <NewCard key={singleProduct._id} singleProd={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
