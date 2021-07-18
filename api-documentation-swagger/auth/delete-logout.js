module.exports = {
    // operation's method
    delete: {
      tags: ["User Auth operations"], // operation's tag
      description: "Log out the user", // short desc
      operationId: "logoutUser", // unique operation id
      parameters: [], // expected params
      requestBody: {
        // expected request body
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "successful log out", // response desc
        },
      },
    },
  };