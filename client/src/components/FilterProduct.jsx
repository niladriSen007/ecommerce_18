import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const REACT_APP_API = "http://localhost:5000";

const FilterProduct = ({ fetchFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle price range selection
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  // Function to apply filters and trigger the onFilter callback
  //   const applyFilters = () => {
  //     onFilter(selectedCategory, selectedPriceRange);
  //   };

  const fetchAllCategories = async () => {
    try {
      const { data: allCategories } = await axios.get(
        `${REACT_APP_API}/admin/category/getAllCategory`
      );
      // console.log(allCategories.category);
      setAllCategories(allCategories.category);
    } catch (e) {
      console.log(e);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const priceRanges = [
    { label: "Above ₹500", value1: 500, value2: 1000 },
    { label: "Above ₹1000", value1: 1001, value2: 2000 },
    { label: "Above ₹2000", value1: 2001, value2: 5000 },
    { label: "Above ₹5001", value1: 5001, value2: 10000 },
    { label: "Above ₹10001", value1: 10001, value2: 20000 },
    { label: "Above ₹20001", value1: 20001, value2: 50000 },
  ];

  const [selectedRanges, setSelectedRanges] = useState([
    {
      value1: 0,
      value2: 0,
    },
  ]);

  const handleCheckboxChange = (e) => {
    // console.log(e.target.getAttribute("data-value1"))
    // console.log(e.target.getAttribute("data-value2"))
    const value1 = e.target.getAttribute("data-value1");
    const value2 = e.target.getAttribute("data-value2");
    console.log(value1, value2);

    let insert = true;
    for (let val of selectedRanges) {
      console.log(val);
      if (val.value1 == value1) {
        let filteredArray = selectedRanges.filter(
          (selectedProd) => selectedProd.value1 != value1
        );
        setSelectedRanges(filteredArray);
        insert=false
      }
    }
    if (insert) {
      setSelectedRanges((prev) => [
        ...prev,
        { value1: value1, value2: value2 },
      ]);
    }
  };

  const applyFilters = async () => {
    selectedRanges.sort((a,b)=>a.value1-b.value1)
    const startVal = selectedRanges.length > 1 ? selectedRanges[1].value1 : 0;
    const endVal =
      selectedRanges.length > 2
        ? selectedRanges[selectedRanges.length - 1].value2
        : (selectedRanges.length === 1 ? 100000 : selectedRanges[1].value2);

    fetchFilteredProducts(startVal, endVal);
    // setSelectedRanges([{}]);
  };
  console.log(selectedRanges);
  // console.log(selectedRanges[selectedRanges.length - 1].value2);

  return (
    <div className="py-24  px-6 border rounded-md shadow-md w-[20vw] left-0 top-0 sticky bg-indigo-200">
      <h2 className="text-lg font-semibold mb-2">Filter Products</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block font-medium mb-1">
          Category:
        </label>
        <select
          id="category"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-300"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all" className="cursor-pointer">
            All Categories
          </option>
          {allCategories?.map((category) => (
            <option key={category._id} value={category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        <p className="font-medium">Price Range:</p>
        {priceRanges.map(({ label, value1, value2 }) => (
          <label key={label} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className=" text-indigo-600 h-5 w-5"
              value={value1}
              data-value1={value1}
              data-value2={value2}
              onChange={handleCheckboxChange}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterProduct;
