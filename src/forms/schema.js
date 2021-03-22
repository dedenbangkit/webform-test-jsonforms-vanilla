const schema = {
  type: "object",
  properties: {
    personalData: {
      type: "object",
      properties: {
        title: { type: "string", enum: ["Mr", "Mrs"] },
        firstName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        birthDate: {
          type: "string",
          format: "date",
          description: "Please enter your birth date.",
        },
        nationality: {
          type: "string",
          enum: [
            "Deutch",
            "Italia",
            "Japan",
            "United States",
            "Russia",
            "Other",
          ],
        },
        nationalityOther: { type: "string" },
        representativeSector: {
          type: "string",
          enum: ["Government", "Private Sector", "iNGO", "Local NGO", "Other"],
        },
      },
      required: ["title", "firstName", "lastName", "birthDate", "nationality"],
    },
    citizen: { type: "boolean" },
    organisations: {
      type: "array",
      description: "You can add more than one organisation",
      items: {
        properties: {
          name: {
            type: "string",
          },
          position: {
            type: "string",
            enum: ["Director", "Manager", "Project Officer", "Other"],
          },
        },
      },
    },
    tags: { type: "string" },
  },
};

export default schema;
