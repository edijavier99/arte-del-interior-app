import React, { useState, useEffect } from "react";
import { auth } from "../../../utils/init-firebase";

const ResetPassword = ({ oobCode }) => {
  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [veriContraseña, setVeriContraseña] = useState("");

  useEffect(() => {
    // Confirmar la acción usando applyActionCode
    auth.applyActionCode(oobCode)
      .then(() => {
        console.log("Acción confirmada con éxito");
      })
      .catch((error) => {
        console.error("Error al confirmar la acción:", error);
      });
  }, [oobCode]);

  const resetContraseña = () => {
    if (nuevaContraseña === veriContraseña) {
      // Obtener el usuario actual después de confirmar la acción
      const user = auth.currentUser;

      // Actualizar la contraseña del usuario
      user.updatePassword(nuevaContraseña)
        .then(() => {
          console.log("Contraseña restablecida con éxito");
        })
        .catch((error) => {
          console.error("Error al restablecer la contraseña:", error);
        });
    } else {
      console.error("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-7">
            <h1>Restablecer contraseña</h1>
            <input
              type="password"
              onChange={(e) => setNuevaContraseña(e.target.value)}
              placeholder="Nueva contraseña"
            />
            <input
              type="password"
              onChange={(e) => setVeriContraseña(e.target.value)}
              placeholder="Verifica contraseña"
            />
            <button className="btn btn-light" onClick={resetContraseña}>
              Restablecer contraseña
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
