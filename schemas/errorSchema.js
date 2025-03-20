const errorSchema = {
    type: "object",
    properties: {
      error: { type: "string" }, 
      code: { type: "number" }   
    },
    required: ["error", "code"],
    additionalProperties: false 
  };
  
  module.exports = errorSchema;