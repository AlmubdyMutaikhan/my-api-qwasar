module.exports = {
    servers: [
      {
        url: "http://myapi-env.eba-ip377w6m.us-east-2.elasticbeanstalk.com/", // url
        description: "AWS server", // name
      },
      {
        url: "http://localhost:8080/", // url
        description: "Local server", // name
      },
      {
        url : "https://my-rest-api-qwasar.herokuapp.com/",
        description : "Heroku server"
      }
    ],
  };
