require("dotenv").config();
const { readJsonFile } = require("../utils/json-reader");

const getEmployeeExtraHour = async (request, response) => {
  const id = Number(request.params.id);
  try {
    let employeeExtraHourInfoJSON = [];

    employeeExtraHourInfoJSON = await readJsonFile(
      process.env.JSON_DIR_EMPLOYEE_EXTRAHOUR
    );

    const employeeFound = employeeExtraHourInfoJSON.filter(
      (employeeExtraHour) => {
        return employeeExtraHour.id === id;
      }
    );

    if (employeeFound.length === 0) {
      throw new Error("Employee not Found");
    }

    response.status(200).send(employeeFound);
  } catch (error) {
    console.error(error.message);
    response.status(400).send({ error: error.message });
  }
};

module.exports = {
  getEmployeeExtraHour,
};
