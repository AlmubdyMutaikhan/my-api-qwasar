module.exports = {
    // operation's method
    delete: {
      tags: ["User Auth operations"], // operation's tag
      description: "Log out the user via google", // short desc
      operationId: "logoutGoogleUser", // unique operation id
      parameters: [], // expected params
      requestBody: {},
      // expected responses
      responses: {
        // response code
        201: {
          description: "successfull log out of google user", // response desc
        },
      },
    },
  };