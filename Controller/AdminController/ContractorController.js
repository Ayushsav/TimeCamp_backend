const AsyncHandler = require("express-async-handler");
const User = require("../../Modals/userSchema");
const { StatusCodes } = require("http-status-codes");
const Contractor = require("../../Modals/ContractorRegisterionModel");
const moment = require("moment");

// create admin
const CreateContratorCtr = AsyncHandler(async (req, res) => {
  try {
    // const user = await User.findById(req.user);
    // if (!user) {
    //   res.status(StatusCodes.BAD_REQUEST);
    //   throw new Error("User Not found please sign in");
    // }

    const response = await Contractor({
      Contractor_Name: req.body.Contractor_Name,
      Contractor_Number: req.body.Contractor_Number,
      Person_Name: req.body.Person_Name,
      Remark: req.body.Remark,
      Created_Date: req.body.Created_Date,
      Created_Time: req.body.Created_Time,
    });

    if (response) {
      await response.save();
      return res.status(201).json({
        success: true,
        message: "Contractor added successfully",
        data: response,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// getall admins

const GetallContractor = AsyncHandler(async (req, res) => {
  try {
    console.log("contractor");
    // const user = await User.findById(req.user);
    // if (!user) {
    //   res.status(StatusCodes.BAD_REQUEST);
    //   throw new Error("User Not found please sign in");
    // }
    const response = await Contractor.find();
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    throw new Error(error?.message);
  }
});

// remove admin
const RemoveContractor = AsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findById(req.user);
    // if (!user) {
    //   res.status(StatusCodes.BAD_REQUEST);
    //   throw new Error("User Not found ! Please sign in");
    // }

    const response = await Contractor.findByIdAndDelete({ _id: id });
    if (response) {
      return res
        .status(200)
        .json({ success: true, message: "delete admin successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// Edit Admin
const EditContractor = AsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findById(req.body);
    // if (!user) {
    //   res.status(StatusCodes.BAD_REQUEST);
    //   throw new Error("User Not found ! Please sign in");
    // }

    const response = await Contractor.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidator: true,
    });
    if (response) {
      return res
        .status(200)
        .json({ success: true, message: "Edit Contractor successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get single Admin
const GetSingleContractor = AsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // const user = await User.findById(req.body);
    // if (!user) {
    //   res.status(StatusCodes.BAD_REQUEST);
    //   throw new Error("User Not found ! Please sign in");
    // }

    const response = await Contractor.findById({ _id: id });
    if (response) {
      return res.status(200).json({ success: true, message: response });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});
module.exports = {
  CreateContratorCtr,
  GetallContractor,
  RemoveContractor,
  EditContractor,
  GetSingleContractor,
};
