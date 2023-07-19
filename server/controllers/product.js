import slugify from "slugify";
import { ProductDetails } from "../models/productDetails.js";
import fs from 'fs'

export const CreateProduct = async (req, res) => {
  try
  {
    const { name, description, price, category, quantity, shipping } = req.fields;
  const { photo } = req.files;

  if (!name || !description || !price || !category || !quantity) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: !name,
        description: !email,
        price: !password,
        category: !phone,
        quantity: !address,
      },
    });
  }

  if(photo && photo.size > 10000)
    res.status(500).send({
        success:false,
        message:"Image size should be smaller than 10 mb"
    })

    const product = new ProductDetails({...req.fields,slug:slugify(name)})

    if(photo)
    {
        product.photo.data = fs.readFileSync(photo.path);
        product.photo.contentType = photo.type;
    }

    await product.save();

    res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        product,
      });
  }
  catch(e)
  {
     console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing product",
    });
  }
};


