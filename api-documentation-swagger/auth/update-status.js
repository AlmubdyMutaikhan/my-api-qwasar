module.exports = {
    // operation's method
    put: {
      tags: ["User Auth operations"], // operation's tag
      description: "Update the status of google user (By default it is null)", // short desc
      operationId: "updateUser", // unique operation id
      parameters: [{
        in : "query",
          name : "status",
          schema : {
              type : "string"
          }
      }], // expected params
      requestBody: {},
      // expected responses
      responses: {
        // response code
        201: {
          description: "successfull update status", // response desc
        },
      },
    },
  };