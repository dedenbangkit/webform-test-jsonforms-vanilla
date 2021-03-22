import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  vanillaRenderers,
  vanillaCells,
  JsonFormsStyleContext,
} from "@jsonforms/vanilla-renderers";
import forms from "./forms";

function App() {
  const [data, setData] = useState({});
  console.log(data);
  const sendData = () => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="form col-md-12">
        <JsonFormsStyleContext.Provider value={forms.style}>
          <JsonForms
            schema={forms.schema}
            uischema={forms.uischema}
            data={data}
            renderers={vanillaRenderers}
            cells={vanillaCells}
            onChange={({ data, _errors }) => setData(data)}
          />
        </JsonFormsStyleContext.Provider>
        <button
          onClick={() => sendData({})}
          className="btn btn-primary btn-submit"
        >
          Clear form data
        </button>
      </div>
    </div>
  );
}

export default App;
