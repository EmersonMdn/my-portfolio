const fs = require('fs');


/*------------------------ GUARDAR DATOS ------------------------------*/
const datos = {
    nombre: "Juan",
    edad: 30,
    email: "juan@example.com",
  };
  
  const datosJSON = JSON.stringify(datos);
  const rutaArchivo = "DB/datos.json";
  
  const saveData = () => {
    fs.writeFile(rutaArchivo, datosJSON, (error) => {
      if (error) {
        console.error("Error al guardar los datos:", error);
      } else {
        console.log("Los datos se han guardado correctamente.");
      }
    });
  };
  
  button.onclick = () => saveData();
  