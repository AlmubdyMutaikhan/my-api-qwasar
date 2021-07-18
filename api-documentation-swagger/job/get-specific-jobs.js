module.exports = {
    // operation's method
    get: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Get jobs by specific params", // short desc
      operationId: "getAjob", // unique operation id
      parameters: [{
        in : "path",
        name : "location",
        type: "String",
        required : true,
        description : "sets the job location"
      },
      {
        in : "path",
        name : "job_title",
        type: "String",
        required : true,
        description : "sets the job title"
      },
    
    ], // expected params
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Shows the list of all jobs", // response desc
        },
      },
  }