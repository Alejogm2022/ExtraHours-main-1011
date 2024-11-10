export const deleteEmployee = async (employeeId) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:8080/api/employee/${employeeId}`,
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    return;
  } catch (error) {
    console.error("Error al eliminar empleado:", error);
    throw error;
  }
};
