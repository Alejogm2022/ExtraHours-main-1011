const { readJsonFile } = require("../utils/json-reader");
const path = require("path");
require("dotenv").config();

// const JSON_DIR_EXTRAHOUR = process.env.JSON_DIR_EXTRAHOUR;
// const JSON_DIR_EMPLOYEE_INFO = process.env.JSON_DIR_EMPLOYEE_INFO;

const getExportReport = async (request, response) => {
  try {
    const extraHours = await readJsonFile(JSON_DIR_EXTRAHOUR);
    const employeeInfo = await readJsonFile(JSON_DIR_EMPLOYEE_INFO);

    const employeeMap = new Map();
    employeeInfo.forEach((emp) => {
      employeeMap.set(emp.id, emp);
    });

    const tasks = extraHours
      .map((extraHour) => {
        const employee = employeeMap.get(extraHour.id);
        if (employee) {
          return {
            registry: extraHour.registry,
            id: extraHour.id,
            name: employee.name,
            position: employee.position,
            diurnal: extraHour.diurnal,
            nocturnal: extraHour.nocturnal,
            diurnalHoliday: extraHour.diurnalHoliday,
            nocturnalHoliday: extraHour.nocturnalHoliday,
            extraHour: extraHour.extraHour,
            date: extraHour.date,
            manager: employee.manager,
          };
        } else {
          console.error(`Employee with id ${extraHour.id} not found`);
          return null;
        }
      })
      .filter((task) => task !== null);

    if (tasks.length > 0) {
      const xlsBuffer = await generateXLS(tasks);
      response.set("Content-Disposition", "attachment; filename=data.xls");
      response.type(
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      response.send(xlsBuffer);
    } else {
      response.status(404).json({ message: "No tasks found" });
    }
  } catch (err) {
    if (!response.headersSent) {
      response
        .status(500)
        .json({ message: "Something went wrong", error: err.message });
    } else {
      console.error("Headers already sent:", err);
    }
  }
};

module.exports = {
  getExportReport,
};
