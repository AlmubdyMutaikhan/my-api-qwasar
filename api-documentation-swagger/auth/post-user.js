module.exports = {
    // operation's method
    post: {
      tags: ["User Auth operations"], // operation's tag
      description: "Sign in the user", // short desc
      operationId: "signinUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LogInUser", // todo input data model
            },
          },
        },
        
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "successfull sign in", // response desc
        },
      },
    },
  };