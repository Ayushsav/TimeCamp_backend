// const AsyncHandler = require("express-async-handler");
// const TimeSheet = require("../../Modals/TimeSheetModel");
// const paginate = require("../../Utils/pagination");
// // get all timesheet ctr

// const GetAllTimesheetCtr = AsyncHandler(async (req, res) => {
//   try {
//     const { page } = req.query;
//     const { query, pagination } = paginate(TimeSheet, page, 10);
//     const timesheets = await query.lean().exec();
//     res.status(200).json({
//       success: true,
//       message: timesheets,
//       pagination,
//     });
//   } catch (error) {
//     throw new Error(error?.message);
//   }
// });

// // add time sheet ctr

// const AddTimeSheetCtr = AsyncHandler(async (req, res) => {
//   try {
//     const timesheet = new TimeSheet(req.body);
//     const savedTimesheet = await timesheet.save();
//     return res.status(200).json(savedTimesheet);
//   } catch (error) {
//     throw new Error(error?.message);
//   }
// });

// // Delete Time Sheet

// const RemoveTimeSheetCtr = AsyncHandler(async (req, res) => {
//   try {
//     const removesheet = await TimeSheet.findByIdAndDelete(req.params.id);
//     if (!removesheet) {
//       return res.status(404).json({ message: "Timesheet not found" });
//     }
//     res.status(200).json({ message: "Timesheet deleted" });
//   } catch (error) {
//     throw new Error(error?.message);
//   }
// });
// const UpdateTimesheetCtr = AsyncHandler(async (req, res) => {
//   try {
//     const timesheet = await TimeSheet.findByIdAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true }
//     );
//     if (!timesheet) {
//       return res.status(404).json("timesheet not found");
//     }
//     return res.status(200).json("updated timeSheet");
//   } catch (error) {
//     throw new Error(error?.message);
//   }
// });

// module.exports = {
//   GetAllTimesheetCtr,
//   AddTimeSheetCtr,
//   RemoveTimeSheetCtr,
//   UpdateTimesheetCtr,
// };

const asyncHandler = require("express-async-handler");
const TimeSheet = require("../../Modals/TimeSheetModel");
const timesheetController = {
  // create
  createtimesheet: asyncHandler(async (req, res) => {
    try {
      const newTask = await TimeSheet(req.body);
      await newTask.save();
      res
        .status(201)
        .json({ message: "Task created successfully", task: newTask });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error creating task", error: error.message });
    }
  }),
  // get timesheet
  fetchtimesheet: asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user);
      if (!user) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error("Un Authorized User");
      }
      // verify company

      const verifycompany = await Company.findOne({ UserId: user?.user_id });
      if (!verifycompany) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error(
          "Your Company has still not registred please register now"
        );
      }
    } catch (error) {
      throw new Error(error?.message);
    }
  }),
  // remove timesheet

  removetimesheet: asyncHandler(async (req, res) => {
    try {
    } catch (error) {
      throw new Error(error?.message);
    }
  }),
  edittimesheet: asyncHandler(async (req, res) => {
    try {
    } catch (error) {}
  }),

  sigletimesheet: asyncHandler(async (req, res) => {
    try {
    } catch (error) {}
  }),
};

module.exports = timesheetController;
