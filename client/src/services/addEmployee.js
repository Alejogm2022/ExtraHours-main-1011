export const addEmployee = async (employeeData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    };

    const response = await fetch(`http://localhost:8080/api/employee`, options);

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al agregar empleado:", error);
    throw error;
  }
};
