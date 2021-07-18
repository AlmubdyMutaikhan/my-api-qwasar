module.exports = {
    // operation's method
    get: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Get all jobs (provides pagination)", // short desc
      operationId: "getAjob", // unique operation id
      parameters: [{
        in : "query",
        name : "page",
        schema: { 
            type: "integer"
        },
        required : false,
        description : "sets the page of pagination"
      }], // expected params
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Shows the list of all jobs", // response desc
        },
      },
  }