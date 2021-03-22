const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      label: "Basic Information",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              classNames: ["col"],
              scope: "#/properties/personalData/properties/title",
            },
            {
              type: "Control",
              scope: "#/properties/personalData/properties/firstName",
            },
            {
              type: "Control",
              scope: "#/properties/personalData/properties/lastName",
            },
            {
              type: "Control",
              scope: "#/properties/personalData/properties/birthDate",
            },
          ],
        },
      ],
    },
    {
      type: "Group",
      label: "Additional Information",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/nationality",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/nationalityOther",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/propeties/personalData/properties/nationality",
              schema: { const: "Other" },
            },
          },
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/citizen",
      label: "I'm a private citizen",
      default: false,
    },
    {
      type: "Group",
      label: "Organisations",
      options: {
        elementLabelProp: "Organisationz",
      },
      elements: [
        {
          type: "Control",
          label: "Organisation",
          scope: "#/properties/organisations",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/propeties/citizen",
              schema: { const: true },
            },
          },
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/tags",
    },
    {
      type: "Control",
      scope: "#/properties/personalData/properties/representativeSector",
    },
  ],
};

export default uischema;
