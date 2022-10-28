import React from "react";
import Textbox from "../components/forms/Textbox";
import Button from "@mui/material/Button";

const SampleForm = () => {
  return (
    <>
      <div>
        <Textbox
          id="NombreTramite"
          label="Nombre trámite"
          lineNumber={1}
          onChangeAction={(dato) => {
            console.log(`Nombre, Cambio de dato desde SampleForm: ${dato}`);
          }}
        />
      </div>
      <br />
      <div>
        <Textbox
          id="numeroIdentificacion"
          label="Número identificacion"
          lineNumber={1}
          onChangeAction={(dato) => {
            console.log(`CI, Cambio de dato desde SampleForm: ${dato}`);
          }}
        />
      </div>
      <br />
      <div>
        <Textbox
          id="descripcion"
          label="Descripción"
          lineNumber={4}
          onChangeAction={(dato) => {
            console.log(`CI, Cambio de dato desde SampleForm: ${dato}`);
          }}
        />
      </div>
      <br />
      <div>
        <Button variant="outlined">GUARDAR DATOS</Button>
      </div>
    </>
  );
};

export default SampleForm;
