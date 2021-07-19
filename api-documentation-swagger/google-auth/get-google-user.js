module.exports = {
    // operation's method
    get: {
      tags: ["User Auth operations"], // operation's tag
      description: "Sign in the user via google", // short desc
      operationId: "signinGoogleUser", // unique operation id
      parameters: [], // expected params
      requestBody: {},
      // expected responses
      responses: {
        // response code
        201: {
          description: "successfull sign in of google user", // response desc
        },
      },
    },
  };