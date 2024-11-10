const express = require("express");
const {
  getExtrahours,
  getExtrahoursById,
  getExtrahoursByDateRange,
  putExtrahours,
  deleteExtrahours,
  postExtrahours,
  postExtraHourToJSON,
} = require("../apis/extrahours");

const { getEmployee } = require("../apis/employee");

const { getEmployeeExtraHour } = require("../apis/employeeExtraHour");

const router = express.Router();

router.get("/extra-hour/registry/:registry", getExtrahours);
router.get("/extra-hour/id/:id", getExtrahoursById);

router.get("/extra-hour", getExtrahoursByDateRange);

router.get("/employee-info/:id", getEmployee);
router.put("/extra-hour/:registry", putExtrahours);
router.delete("/extra-hour/:registry", deleteExtrahours);
router.post("/extra-hour", postExtrahours);
router.post("/employee-extra-hour", postExtraHourToJSON);
router.get("/employee-extra-hour/:id", getEmployeeExtraHour);

module.exports = router;
