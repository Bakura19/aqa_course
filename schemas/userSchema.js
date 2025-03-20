const userSchema = {
    type: "object",
    properties: {
      id: { type: "number" },
      userName: { type: "string" },
      password: { type: "string" }
    },
    required: ["id", "userName", "password"],
    additionalProperties: false 
  };
  
  module.exports = userSchema;