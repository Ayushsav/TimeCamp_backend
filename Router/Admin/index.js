const express = require("express");
const verifyToken = require("../../Auth/VerifyAuth");
const {
  Getalladmin,
  createAdmin,
  EditAdmin,
  RemoveAdmin,
} = require("../../Controller/AdminController/admincontroller");
const {
  createClientCtr,
  GetAllClientCtr,
  EditClientCtr,
  GetSingleClientCtr,
  RemoveClient,
} = require("../../Controller/AdminController/ClientCtr");
const {
  CreateContratorCtr,
  EditContractor,
  RemoveContractor,
  GetallContractor,
} = require("../../Controller/AdminController/ContractorController");
const {
  GetallContactCtr,
  GetSingleContactCtr,
} = require("../../Controller/ContactController");

const {
  GetAllCompany,
  RegisterCompany,
  EditCompany,
  CreateAdminCtr,
} = require("../../Controller/AdminController/CompanyController");
const {
  AddDesignation,
  GetSignleDesignation,
  RemoveDesignation,
  EditDesignation,
  GetAllDesignation,
} = require("../../Controller/AdminController/DesignationCtr");
const {
  AddDepartment,
  GetAllDepartment,
  GetSingleDepartment,
  EditDepartment,
  RemoveDepartment,
} = require("../../Controller/AdminController/DepartmentCtr");
const {
  ReomveEmployee,
  GetAllEmployee,
  AddEmployee,
  EditEmployee,
} = require("../../Controller/AdminController/EmployeeCotroller");
const {
  GetAllTimesheetCtr,
  AddTimeSheetCtr,
  RemoveTimeSheetCtr,
  UpdateTimesheetCtr,
} = require("../../Controller/AdminController/TimeSheetCtr");

const adminRouter = express.Router();

// Admin
adminRouter.post("/create-admin", verifyToken, createAdmin);
adminRouter.get("/get-all-admin", verifyToken, Getalladmin);
adminRouter.put("/update-admin", EditAdmin);
adminRouter.delete("/remove-admin", RemoveAdmin);
// client
adminRouter.post("/create-client", verifyToken, createClientCtr);
adminRouter.get("/get-all-client", verifyToken, GetAllClientCtr);
adminRouter.put("/edit-client/:id", verifyToken, EditClientCtr);
adminRouter.get("/get-single-client/:id", verifyToken, GetSingleClientCtr);
adminRouter.delete("/remove-client/:id", verifyToken, RemoveClient);
// contractor
adminRouter.post("/add-contractor", CreateContratorCtr);
adminRouter.get("/get-all-contractor", GetallContractor);
adminRouter.put("/edit-contractor/:id", EditContractor);
adminRouter.delete("/remove-contractor/:id", RemoveContractor);
adminRouter.get("/get-single-contractor/:id", GetSingleContactCtr);

//company
adminRouter.get("/get-all-company", verifyToken, GetAllCompany);
adminRouter.post("/add-company", verifyToken, RegisterCompany);
adminRouter.post("/edit-company", verifyToken, EditCompany);
//company

// Designation
adminRouter.get("/get-all-designation", GetAllDesignation);
adminRouter.post("/add-designation", AddDesignation);
adminRouter.get("/get-single-designation/:id", GetSignleDesignation);
adminRouter.delete("/remove-designation/:id", RemoveDesignation);
adminRouter.put("/edit-designation/:id", EditDesignation);
// Designation

// Department
adminRouter.get("/get-all-department", GetAllDepartment);
adminRouter.get("/get-single-department/:id", GetSingleDepartment);
adminRouter.post("/add-department", AddDepartment);
adminRouter.put("/edit-department/:id", EditDepartment);
adminRouter.delete("/remove-department/:id", RemoveDepartment);
// Department

// Employee  router

adminRouter.get("/get-all-employee", GetAllEmployee);
adminRouter.post("/add-employee", AddEmployee);
adminRouter.delete("/reomve-employee/:id", ReomveEmployee);
adminRouter.put("/edit-Employee/:id", EditEmployee);

// Employee router

// TimeSheet

module.exports = adminRouter;
