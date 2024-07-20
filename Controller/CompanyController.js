const AsyncHandler = require("express-async-handler");
const Company = require("../Modals/CompanySchema");
const { StatusCodes } = require("http-status-codes");
const User = require("../Modals/userSchema");

// GetAllCompany
const GetAllCompany = AsyncHandler(async (req, res) => {
  try {
    // user
    const user = await User.findById();
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error("Un Authorized User");
    }
    // verified
    const verifycompany = await Company.findOne({ UserId: user?.user_id });
    if (!verifycompany) {
      res.status(StatusCodes.BAD_REQUEST);
      throw new Error("Your Company has still not registred ");
    }
    const response = await Company.find();
    if (response) {
      return res
        .status(StatusCodes.OK)
        .json({ status: StatusCodes.OK, message: response });
    }
  } catch (error) {
    throw new Error(error?.message);
  }
});

// RegisterCompany

const RegisterCompany = AsyncHandler(async (req, res) => {
  try {
    // user verification
    const user = await User.findById();
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error("Un Authorized User");
    }

    const response = await Company(req.body);

    if (!response) {
      res.status(StatusCodes.BAD_REQUEST);
      throw new Error("forebbidden");
    }
    await response.save();
    return res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: "Company Added Successfully",
    });
  } catch (error) {
    return res.status(500).json(error?.message);
  }
});

const EditCompany = AsyncHandler(async (req, res) => {
  try {
    const user = await User.findById();
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error("Un Authorized User");
    }

    const verifycompany = await Company.findOne({ UserId: user?.user_id });
    if (!verifycompany) {
      res.status(StatusCodes.BAD_REQUEST);
      throw new Error("Your Company has still not registred ");
    }

    const FindCompany = await Company.findById({ _id: req.params.id });

    if (!FindCompany) {
      res.status(StatusCodes.BAD_REQUEST);
      throw new Error("there is some issue");
    } else {
      const { find } = FindCompany;

      FindCompany.user = req.body.User || User;
    }

    await FindCompany.save();

    return res
      .status(StatusCodes.OK)
      .json({ status: Success, message: "Company Updated Successfully" });
  } catch (error) {
    throw new Error(error?.message);
  }
});

module.exports = {
  GetAllCompany,
  EditCompany,
  RegisterCompany,
};
