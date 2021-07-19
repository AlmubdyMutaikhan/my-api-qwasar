module.exports = {
    // operation's method
    post: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Post a new job (status must be 'employer')", // short desc
      operationId: "postAjob", 
      parameters: [], // expected params
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PostingJob", 
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