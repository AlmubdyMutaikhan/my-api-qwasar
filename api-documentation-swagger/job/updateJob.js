module.exports = {
    // operation's method
    put: {
      tags: ["Job CRUD operations"], // operation's tag
      description: "Update the job by params", // short desc
      operationId: "updateAjob", // unique operation id
      parameters : [
        {in : "path",
        name : "job_id",
        schema : {
            type : "ObjectId"
        }
        }
      ],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/PostingJob", // change values
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Shows the list of all jobs", // response desc
        },
      },
    }
  }