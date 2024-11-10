require("dotenv").config();
const { readJsonFile } = require("../utils/json-reader");
const { formatCurrency } = require("../utils/format-currency");

const getEmployee = async (request, response) => {
  const id = Number(request.params.id);
  try {
    let employeeInfoJSON = [];

    employeeInfoJSON = await readJsonFile(process.env.JSON_DIR_EMPLOYEE_INFO);

    const employeeFound = employeeInfoJSON.find((employee) => {
      return employee.id === id;
    });

    if (!employeeFound) {
      throw new Error("Employee not Found");
    }

    employeeFound.salary = formatCurrency(employeeFound.salary);

    response.status(200).send(employeeFound);
  } catch (error) {
    console.log(error);

    response.sendStatus(400);
  }
};

module.exports = {
  getEmployee,
};
