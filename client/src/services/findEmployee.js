export const findEmployee = async (employeeId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/employee/${employeeId}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener la información del empleado");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al buscar empleado:", error);

    throw error;
  }
};
