const styleContextValue = {
  styles: [
    { name: "vertical.layout", classNames: ["row"] },
    { name: "vertical.layout.item", classNames: ["col-md-12"] },
    { name: "horizontal.layout", classNames: ["row"] },
    { name: "horizontal.layout.item", classNames: ["col"] },
    { name: "control.validation", classNames: ["invalid-feedback"] },
    {
      name: "array.table.label",
      classNames: ["hide"],
    },
    {
      name: "array.table.button",
      classNames: ["btn", "btn-sm", "btn-secondary", "mb-3"],
    },
    { name: "array.table.table", classNames: ["table", "table-stripped"] },
    {
      name: "array.table.table.validation",
      classNames: ["btn", "btn-sm", "btn-primary"],
    },
    {
      name: "control.input",
      classNames: ["form-control"],
    },
    {
      name: "control.select",
      classNames: ["form-control", "form-select"],
    },
    {
      name: "control.check",
      classNames: ["form-check"],
    },
  ],
};

export default styleContextValue;
