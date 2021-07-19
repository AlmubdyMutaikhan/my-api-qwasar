module.exports = {
    // operation's method
    post: {
      tags: ["User Auth operations"], // operation's tag
      description: "Sign up the user", // short desc
      operationId: "signupUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RegisterUser", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "User created successfully", // response desc
        },
      },
    },
  };