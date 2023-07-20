import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import NewCard from '../components/NewCard';
const REACT_APP_API = "http://localhost:5000";

const ProductsListPage = () => {

    const [allProducts,setAllProducts] = useState([])

    const fetchAllProducts = async() =>{
        const {data : allProducts} = await axios.get(`${REACT_APP_API}/admin/products/getAllProducts`)
        console.log(allProducts.products)
        setAllProducts(allProducts.products)


    }

    useEffect(()=>{
        fetchAllProducts()
    },[])
  return (
    <div className='grid grid-cols-5 gap-12 items-center my-16 px-32'>
        {
            allProducts.map(singleProduct=>(
                <NewCard key={singleProduct._id} singleProd={singleProduct}/>
            ))
        }
    </div>
  )
}

export default ProductsListPage