export const updateConfig = async (newConfig) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newConfig),
    };

    const response = await fetch(`http://localhost:8080/api/config`, options);

    if (!response.ok) {
      throw new Error("Error actualizando la configuración");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar configuración:", error);
    throw error;
  }
};
