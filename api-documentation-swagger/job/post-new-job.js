module.exports = {
    // operation's method
    post: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Post a new job (status must be 'employer')", // short desc
      operationId: "postAjob", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Job", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Job created successfully", // response desc
        },
      },
    },
  };