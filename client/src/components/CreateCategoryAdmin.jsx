import axios from "axios";
import { useEffect, useState } from "react";
const REACT_APP_API = "http://localhost:5000";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";


const CreateCategoryAdmin = () => {
//  console.log("Create Cat");

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [updateCategoryId, setUpdateCategoryId] = useState(0);
  const [showUpdateBtn, setShowUpdateBtn] = useState(false);

  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = async (e, ) => {
    e.preventDefault();
    try {
      // Add the new category to the categories array (you can handle the API/database call here)
      const user = localStorage.getItem("activeUser");
      const parseData = JSON.parse(user);
    //  console.log(parseData);

        const { data: newCat } = await axios.post(
          `${REACT_APP_API}/admin/category/createCategory`,
          { parseData, newCategory }
        );
      //  console.log(newCat?.category?._id);
      toast.success("New Category has been added successfully")
        setCategories([
        ...categories,
        { _id: newCat?.category?._id, name: newCat.category.name },
      ]);
      // Reset the newCategory state
      setNewCategory("");

      
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const categories = await axios.get(
        `${REACT_APP_API}/admin/category/getAllCategory`
      );
     // console.log(categories.data.category);
      setCategories(categories.data.category);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const deleteCategory = async (id) => {
    await axios.delete(`${REACT_APP_API}/admin/category/deleteCategory/${id}`);
    toast.success("Category has been deleted successfully")
    fetchAllCategories();
  };
  const editCategory = async (e, id) => {
    setShowUpdateBtn(true)
    const { data: cat } = await axios.get(
      `${REACT_APP_API}/admin/category/getSingleCategory/${id}`
    );
   // console.log(cat.category.name);

    setNewCategory(cat.category.name);
    setUpdateCategoryId(id)
   
  };


  const handleUpdateCategoryName =async(e) =>{
    e.preventDefault()
     await axios.put(
      `${REACT_APP_API}/admin/category/updateCategory/${updateCategoryId}`,
      { newCategory }
    );
    toast.success("Category has been updated successfully")
    setShowUpdateBtn(false)
    fetchAllCategories()
    setNewCategory("");
    
  } 

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl text-indigo-800 mb-4">Add a new category</h1>

      {/* Category Form */}
      <form  className="mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 w-full rounded-md"
          placeholder="Enter a new category"
          value={newCategory}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indig--800 text-white px-4 py-2 rounded-md mt-2"
          onClick={(e)=>handleSubmit(e)}
        >
          Add Category
        </button>

       { showUpdateBtn && <button
          type="submit"
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md mt-2 ml-3"
          onClick={(e)=>handleUpdateCategoryName(e)}
        >
          Update Category
        </button>}
      </form>

      {/* Categories List */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Categories:</h2>
        <ul>
          {categories?.map((category) => (
            <div
              key={category.id}
              className="flex justify-between items-center"
            >
              <li className="bg-white border border-indigo-300 px-2 py-1 rounded-md m-2 text-indigo-800 text-lg">
                {category.name}
              </li>
              <div className="flex gap-4 items-center">
                <AiFillEdit
                  size={24}
                  className="cursor-pointer text-green-500 hover:text-green-800 transition-all duration-300"
                  onClick={(e) => editCategory(e, category._id)}
                />
                <AiFillDelete
                  size={24}
                  className="cursor-pointer text-red-500 hover:text-red-900 transition-all duration-300"
                  onClick={() => deleteCategory(category._id)}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateCategoryAdmin;
