import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  vanillaRenderers,
  vanillaCells,
  JsonFormsStyleContext,
} from "@jsonforms/vanilla-renderers";

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    vegetarian: {
      type: "boolean",
    },
    birthDate: {
      type: "string",
      format: "date",
      description: "Please enter your birth date.",
    },
    nationality: {
      type: "string",
      enum: ["Deutch", "Italia", "Japan", "United States", "Russia", "Other"],
    },
    personalData: {
      type: "object",
      properties: {
        age: {
          type: "integer",
          description: "Please enter your age.",
        },
        height: {
          type: "number",
        },
        drivingSkill: {
          type: "number",
          maximum: 10,
          minimum: 1,
          default: 7,
        },
      },
      required: ["age", "height"],
    },
    occupation: {
      type: "string",
    },
    postalCode: {
      type: "string",
      maxLength: 5,
    },
    1234: {
      type: "string",
      maxLength: 5,
      description: "Test question",
    },
  },
  required: ["occupation", "nationality"],
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/age",
        },
        {
          type: "Control",
          scope: "#/properties/birthDate",
        },
        {
          type: "Control",
          scope: "#/properties/1234",
          label: "Test Question",
        },
      ],
    },
    {
      type: "Label",
      text: "Additional Information",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/height",
        },
        {
          type: "Control",
          scope: "#/properties/nationality",
        },
        {
          type: "Control",
          scope: "#/properties/occupation",
          suggestion: [
            "Accountant",
            "Engineer",
            "Freelancer",
            "Journalism",
            "Physician",
            "Student",
            "Teacher",
            "Other",
          ],
        },
      ],
    },
  ],
};

function App() {
  const [data, setData] = useState({});
  const styleContextValue = {
    styles: [
      {
        name: "control.input",
        classNames: ["form-control"],
      },
      {
        name: "control.select",
        classNames: ["form-control"],
      },
    ],
  };
  console.log(data);
  return (
    <div className="container">
      <div className="col-md-12">
        <JsonFormsStyleContext.Provider value={styleContextValue}>
          <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={vanillaRenderers}
            cells={vanillaCells}
            onChange={({ data, _errors }) => setData(data)}
          />
        </JsonFormsStyleContext.Provider>
      </div>
    </div>
  );
}

export default App;
