import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const REACT_APP_API = "http://localhost:5000";
import { useNavigate } from "react-router-dom";
import {useCategory} from "../hooks/useCategory";

const CreateProductAdmin = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    photo: "",
    shipping: 0,
  });


  // const [allCategories, setAllCategories] = useState([]);

  const navigateTo = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "photo" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    try {
      const productData = new FormData();
      productData.append("name", product.name);
      productData.append("description", product.description);
      productData.append("price", product.price);
      productData.append("quantity", product.quantity);
      productData.append("photo", product.photo);
      productData.append("category", product.category);
      console.log(productData)
      const { data } = axios.post(
        `${REACT_APP_API}/admin/products/createProduct`,
        productData
      );
      console.log(data)
      if (data?.success) {
        toast.error(data?.message);
      } else {
        
        toast.success("Product Created Successfully");
        navigateTo("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  // const fetchAllCategories = async () => {
  //   try {
  //     const { data: allCategories } = await axios.get(
  //       `${REACT_APP_API}/admin/category/getAllCategory`
  //     );
  //     console.log(allCategories.category);
  //     setAllCategories(allCategories.category);
  //   } catch (e) {
  //     console.log(e);
  //     toast.error("Something wwent wrong in getting catgeory");
  //   }
  // };

  // useEffect(() => {
  //   fetchAllCategories();
  // }, []);

  //created custom hook for fetching categories
  const allCategories = useCategory()

  return (
    <div className="bg-white p-8 pt-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
        Create Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-indigo-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
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
            value={product.description}
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
            value={product.price}
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
            value={product.quantity}
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
            value={product.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
            required
          >
            <option value="" disabled>
              <span className="text-indigo-700">Select a category</span>
            </option>
            {allCategories?.map((category) => (
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
            Photo URL
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700 "
            required
          />
        </div>
        <div className="mb-3">
          {product.photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(product.photo)}
                alt="product_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-indigo-700">
            Shipping Status
          </label>
          <select
            name="shipping"
            value={product.shipping}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-indigo-300 outline-none placeholder:text-indigo-700"
            required
          >
            <option value="" disabled>
              <span className="text-indigo-700">Select a shipping status</span>
            </option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-all duration-300"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProductAdmin;
