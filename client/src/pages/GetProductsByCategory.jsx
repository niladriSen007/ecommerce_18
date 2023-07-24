import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewCard from '../components/NewCard';
const REACT_APP_API = "http://localhost:5000";


const GetProductsByCategory = () => {
    const {id} = useParams()
    console.log(id)
    const [categorizedProducts,setCategorizedProducts] = useState([])

    const getProductsByCategoryName = async() =>{

        const { data : productsByCat} = await axios.get(`${REACT_APP_API}/admin/products/getAllProducts/${id}`) 
        console.log(productsByCat)
        setCategorizedProducts(productsByCat.products)
    }

    useEffect(()=>{
        getProductsByCategoryName()
    },[id])
  return (
    <div className='flex flex-col w-[96vw] gap-10 my-16 px-32'>
        <div className="grid grid-cols-4 gap-32 items-center ">
          { categorizedProducts.length !== 0 ? categorizedProducts?.map((singleProduct) => (
            <NewCard key={singleProduct._id} singleProd={singleProduct} />
          )) : <p className='text-2xl w-[24vw]'>No Products to show in this category</p>}
        </div>
    </div>
  )
}

export default GetProductsByCategory