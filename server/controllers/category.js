import slugify from "slugify";
import { CategoryDetails } from "../models/categoryDetails.js";

//create category
export const CreateCategory = async (req, res) => {
  const name = req.body.newCategory;
  const id = req.body.id;

  try {
    if (!name)
      res.status(401).send({
        success: false,
        message: "Category name is required",
      });
    let checkCategoryAvailability;
    if (id !== 0)
      checkCategoryAvailability = await CategoryDetails.findById(id);
    else checkCategoryAvailability = await CategoryDetails.findOne({ name });
    if (checkCategoryAvailability) {
      const updatedCat = await CategoryDetails.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(201).send({
        success: true,
        message: "Category updated Successfully",
        category: updatedCat,
      });
    }
    else
    {
      const newCategory = new CategoryDetails({ name, slug: slugify(name) });
      await newCategory.save();
      res.status(201).send({
        success: true,
        message: "Category created Successfully",
        category: newCategory,
      });
    }
  } catch (e) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

//update category
export const UpdateCategory = async (req, res) => {
  const  name  = req.body.newCategory;
  const { id } = req.params;

  console.log(name);
  try {
    const updatedCategory = await CategoryDetails.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category: updatedCategory,
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      message: "Something went wrong while updating Category",
    });
  }
};

//delete category
export const DeleteCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const checkCategoryAvailability = await CategoryDetails.findByIdAndDelete(
      id
    );
    if (!checkCategoryAvailability)
      res.status(401).send({
        success: false,
        message: "Category doesn't exist",
      });
    res.status(201).send({
      success: true,
      message: "Category deleted Successfully",
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      message: "Something went wrong while deleting Category",
    });
  }
};

//get all category
export const GetAllCategory = async (req, res) => {
  try {
    const category = await CategoryDetails.find();
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// single category
export const GetsingleCategory = async (req, res) => {
  try {
    const category = await CategoryDetails.findById(req.params.id);
    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};
