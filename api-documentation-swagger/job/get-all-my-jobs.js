module.exports = {
    // operation's method
    get: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Get all my jobs (status must be 'employer')", // short desc
      operationId: "getAllMyJobs", // unique operation id
      parameters: [], // expected params
      // expected responses
      responses: {
        // response code
        201: {
          description: "Shown his jobs", // response desc
        },
      },
    },
  };