import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminProductCard from "./AdminProductCard";
const REACT_APP_API = "http://localhost:5000";
import {GiCrossMark} from 'react-icons/gi'
import AdminUpdateProduct from "./AdminUpdateProduct";
// import AdminUpdateProduct from "./AdminUpdateProduct";

const AdminProducsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  const fetchAllProducts = async () => {
    try {
      const { data: allProducts } = await axios.get(
        `${REACT_APP_API}/admin/products/getAllProducts`
      );
      // console.log(allProducts.products);
      setAllProducts(allProducts.products);
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [id,setId] = useState("")
  const onClickEdit = (prodId) =>{
    setId(prodId)
  }


  const deleteProduct = async(id) =>{
    console.log(id)
    try{
      const {data} = await axios.delete(`${REACT_APP_API}/admin/products/deleteProduct/${id}`)
      console.log(data)
      toast.success("Product has been deleted")
      fetchAllProducts()
    }
    catch(e)
    {
      toast.error(e)
    }

  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 items-center my-16 px-32 relative">
        {allProducts.map((singleProduct) => (
          <AdminProductCard onClickEdit={onClickEdit} deleteProduct={deleteProduct}  key={singleProduct._id} singleProd={singleProduct} showUpdateProduct={showUpdateProduct} setShowUpdateProduct={setShowUpdateProduct}/>
        ))}
      </div>
      {/* { showUpdateProduct  && <AdminUpdateProduct showUpdateProduct={showUpdateProduct} setShowUpdateProduct={setShowUpdateProduct} />
       } */}

{showUpdateProduct && (
        <AdminUpdateProduct showUpdateProduct={showUpdateProduct} setShowUpdateProduct={setShowUpdateProduct} id={id} fetchAllProducts={fetchAllProducts}/>
      )}
    </div>
  );
};

export default AdminProducsPage;
