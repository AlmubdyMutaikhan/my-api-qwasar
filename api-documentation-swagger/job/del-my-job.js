module.exports = {
    // operation's method
    delete: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Delete choosen job (status must be 'employer')", // short desc
      operationId: "deleteAjob", // unique operation id
      parameters: [
        { in : "path",
          name : "id",
      type : "string",
    required : true}
      ], // expected params
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Job created successfully", // response desc
        },
      },
  }