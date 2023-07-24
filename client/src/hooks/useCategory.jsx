import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const REACT_APP_API = "http://localhost:5000";
export const useCategory = () => {

    const [allCategories, setAllCategories] = useState([]);

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

      useEffect(()=>{
        fetchAllCategories()
      },[])

  return allCategories
}
