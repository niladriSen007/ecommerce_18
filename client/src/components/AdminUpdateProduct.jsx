import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const REACT_APP_API = "http://localhost:5000";
const AdminUpdateProduct = ({
  id,
  setShowUpdateProduct,
  showUpdateProduct,
  fetchAllProducts
}) => {

  const [singleProd,setSingleProd]= useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    photo: "",
    shipping: 0,
  })

  const fetchSingleProduct = async () => {
    const { data } = await axios.get(
      `${REACT_APP_API}/admin/products/getSingleProduct/${id}`
    );
    setSingleProd((prev=>({...prev,
    name:data.product.name,
    description:data.product.description,
    quantity:data.product.quantity,
    category:data.product.category,
    price:data.product.price,
    shipping:data.product.shipping,
  }))) 
};



  const [allCategories, setAllCategories] = useState([]);

  const navigateTo = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleProd({
      ...singleProd,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(singleProd);
    try {
      const productData = new FormData();
      productData.append("name", singleProd.name);
      productData.append("description", singleProd.description);
      productData.append("price", singleProd.price);
      productData.append("quantity", singleProd.quantity);
      // productData.append("photo", singleProd.photo);
      productData.append("category", singleProd.category._id);
      console.log(productData)
      const { data } = axios.put(
        `${REACT_APP_API}/admin/products/updateProduct/${id}`,
        productData
      );
      console.log(data)
      if (data?.success) {
        toast.error(data?.message);
      } else {
        
        fetchAllProducts()
        toast.success("Product Updated Successfully");
        setShowUpdateProduct(!showUpdateProduct)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const fetchAllCategories = async () => {
    try {
      const { data: allCategories } = await axios.get(
        `${REACT_APP_API}/admin/category/getAllCategory`
      );
      console.log(allCategories.category);
      setAllCategories(allCategories.category);
    } catch (e) {
      console.log(e);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  useEffect(() => {
    fetchAllCategories()
  }, []);

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts]);




  return (
    <div className="w-[67vw] h-[72vh] bg-white absolute top-24 shadow-xl">
      <GiCrossMark
        size={24}
        className="absolute right-4 top-2 cursor-pointer"
        onClick={() => setShowUpdateProduct(!showUpdateProduct)}
      />
      <div className="bg-white p-8 pt-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          Update Product
        </h2>
        <form onSubmit={handleSubmit}>
        {/* <for  */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={singleProd.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Description
            </label>
            <textarea
              name="description"
              value={singleProd.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={singleProd.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={singleProd.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Category
            </label>
            <select
              name="category"
              value={singleProd.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            >
              <option value="" disabled>
                <span className="text-indigo-700">Select a category</span>
              </option>
              {allCategories.map((category) => (
                <option
                  key={category._id}
                  value={category._id}
                  className="cursor-pointer"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-indigo-700">
              Shipping Status
            </label>
            <select
              name="shipping"
              value={singleProd.shipping}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
              required
            >
              <option value="" disabled>
                <span className="text-indigo-700">
                  Select a shipping status
                </span>
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-all duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
