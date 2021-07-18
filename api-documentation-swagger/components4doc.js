module.exports = {
    components: {
      schemas: {
        // User model
        LoginUser: {
          type: "object", // data type
          properties: {
            email: {
              type: "String", // data type
              description: "User's email", // desc
              example: "zharkyn.bol@mail.com", 
            },
            password: {
              type: "String (Hashed)", // data type
              description: "password of a user", // desc
              example: "password", 
            },
          },
        },
    
          },
        },
    }