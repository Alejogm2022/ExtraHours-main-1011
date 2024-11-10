require("dotenv").config();
const { readJsonFile, updateJsonFile } = require("../utils/json-reader");

// Función para obtener las horas extra por rango de fechas
const getExtrahoursByDateRange = async (request, response) => {
  const { startDate, endDate } = request.query;

  if (!startDate || !endDate) {
    return response
      .status(400)
      .json({ error: "Missing date range parameters" });
  }

  try {
    const extraHourJSON = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);
    const employeeJSON = await readJsonFile(process.env.JSON_DIR_EMPLOYEE_INFO);

    // Filtra las horas extra que estén dentro del rango de fechas
    const filteredExtraHours = extraHourJSON.filter((extraHour) => {
      const extraHourDate = new Date(extraHour.date);
      return (
        extraHourDate >= new Date(startDate) &&
        extraHourDate <= new Date(endDate)
      );
    });

    if (filteredExtraHours.length === 0) {
      return response
        .status(404)
        .json({ error: "No extra hours found in the specified date range" });
    }

    const results = filteredExtraHours.map((extraHour) => {
      const employee = employeeJSON.find((emp) => emp.id === extraHour.id);
      return {
        ...extraHour,
        name: employee ? employee.name : "Unknown",
        position: employee ? employee.position : "Unknown",
        salary: employee ? employee.salary : "Unknown",
        manager: employee ? employee.manager : "Unknown",
      };
    });

    response.status(200).json(results);
  } catch (error) {
    console.error("Error fetching extra hours by date range:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

// Función para obtener las horas extra
const getExtrahours = async (request, response) => {
  const { registry } = request.params;

  if (isNaN(registry)) {
    return response.status(400).json({ error: "Invalid registry parameter" });
  }

  try {
    let extraHourJSON = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);

    const extraHourFound = extraHourJSON.find((extraHour) => {
      return extraHour.registry == registry;
    });

    if (!extraHourFound) {
      return response.status(404).json({ error: "ExtraHour not found" });
    }

    response.status(200).json(extraHourFound);
  } catch (error) {
    console.error("Error fetching extra hour:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

const getExtrahoursById = async (request, response) => {
  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).json({ error: "Invalid registry parameter" });
  }

  try {
    let extraHourJSON = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);

    const extraHourFound = extraHourJSON.filter((extraHour) => {
      return extraHour.id == id;
    });

    if (!extraHourFound) {
      return response.status(404).json({ error: "ExtraHour not found" });
    }

    response.status(200).json(extraHourFound);
  } catch (error) {
    console.error("Error fetching extra hour:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

// Función para actualizar una hora extra existente
const putExtrahours = async (request, response) => {
  const registry = Number(request.params.registry);
  const updateExtraHour = request.body;

  try {
    const data = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);
    const index = data.findIndex((item) => item.registry === registry);

    if (index !== -1) {
      data[index] = { ...data[index], ...updateExtraHour };
      await updateJsonFile(process.env.JSON_DIR_EXTRAHOUR, data);
      response.status(200).json(data[index]);
    } else {
      response.status(404).json({ message: "Hora extra no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la hora extra:", error);
    response.status(500).json({ message: "Error al actualizar la hora extra" });
  }
};

//Función para eliminar una hora extra
const deleteExtrahours = async (request, response) => {
  const registry = Number(request.params.registry);

  try {
    const data = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);
    const filteredData = data.filter((item) => item.registry !== registry);

    if (data.length !== filteredData.length) {
      await updateJsonFile(process.env.JSON_DIR_EXTRAHOUR, filteredData);
      response
        .status(200)
        .json({ message: "Hora extra eliminada exitosamente" });
    } else {
      response.status(404).json({ message: "Hora extra no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la hora extra:", error);
    response.status(500).json({ message: "Error al eliminar la hora extra" });
  }
};

// Función para agregar una nueva hora extra
const postExtrahours = async (request, response) => {
  try {
    const { body } = request;

    console.log("datos recibidos:", body);

    const data = await readJsonFile(process.env.JSON_DIR_EXTRAHOUR);

    await updateJsonFile(process.env.JSON_DIR_EXTRAHOUR, data);
    data.push(body);
    await updateJsonFile(process.env.JSON_DIR_EXTRAHOUR, data);

    response
      .status(201)
      .json({ message: "Horas extras agregadas correctamente" });
  } catch (error) {
    console.error(error);

    response
      .status(500)
      .json({ message: "Error interno del seervidor", details: error.message });
  }
};

const postExtraHourToJSON = async (request, response) => {
  try {
    const { body } = request;

    console.log("datos recibidos:", body);

    const data = await readJsonFile(process.env.JSON_DIR_EMPLOYEE_EXTRAHOUR);

    await updateJsonFile(process.env.JSON_DIR_EMPLOYEE_EXTRAHOUR, data);
    data.push(body);
    await updateJsonFile(process.env.JSON_DIR_EMPLOYEE_EXTRAHOUR, data);

    response
      .status(201)
      .json({ message: "Información y horas extras agregadas correctamente" });
  } catch (error) {
    console.error(error);

    response
      .status(500)
      .json({ message: "Error interno del seervidor", details: error.message });
  }
};

module.exports = {
  getExtrahours,
  getExtrahoursById,
  getExtrahoursByDateRange,
  putExtrahours,
  deleteExtrahours,
  postExtrahours,
  postExtraHourToJSON,
};
