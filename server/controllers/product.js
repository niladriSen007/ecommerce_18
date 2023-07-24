import slugify from "slugify";
import { ProductDetails } from "../models/productDetails.js";
import fs from "fs";
import { CategoryDetails } from "../models/categoryDetails.js";
import braintree from "braintree";
import { OrderDetails } from "../models/orderDetails.js";

import dotenv from "dotenv"

dotenv.config()

export const CreateProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
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

    if (photo && photo.size > 100000)
      res.status(500).send({
        success: false,
        message: "Image size should be smaller than 10 mb",
      });

    const product = new ProductDetails({ ...req.fields, slug: slugify(name) });

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();

    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing product",
    });
  }
};

export const GetAllProducts = async (req, res) => {
  try {
    const products = await ProductDetails.find()
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 })
      .populate("category");
    res.status(200).send({
      success: true,
      totalProducts: products.length,
      message: "All Products List",
      products,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching products",
    });
  }
};

export const GetSingleProduct = async (req, res) => {
  try {
    const product = await ProductDetails.findById(req.params.id)
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Product",
      product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      e,
      message: "Error in fetching product",
    });
  }
};

export const GetProductPhoto = async (req, res) => {
  try {
    const product = await ProductDetails.findById(req.params.id).select(
      "photo"
    );
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(201).send(product.photo.data);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      e,
      message: "Error in fetching product",
    });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    // console.log(req.fields)
    // const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
    }

    const product = await ProductDetails.findByIdAndUpdate(
      req.params.id,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    // console.log(product)
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error while updating product",
      e,
    });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    await ProductDetails.findByIdAndDelete(req.params.id).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

export const GetProductByCategory = async (req, res) => {
  try {
    const categoryName = await CategoryDetails.findById(req.params.id);
    const prodByCat = await ProductDetails.find({ category: categoryName._id });
    res.status(200).send({
      success: true,
      products: prodByCat,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching product",
      error,
    });
  }
};

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

export const BrainTreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
export const BrainTreePaymentController = async (req, res) => {
  try {
    const { nonce, cartItem : cart } = req.body;
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    let newTransaction = gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      function (error, result) {
        if (result) {
          const order = new OrderDetails({
            products: cart,
            payment: result,
            buyer: req.user._id,
          }).save();
          res.json({ ok: true });
        } else {
          res.status(500).send(error);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};
