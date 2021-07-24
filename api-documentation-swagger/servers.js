module.exports = {
    servers: [
      {
        url: "http://ec2-18-116-88-142.us-east-2.compute.amazonaws.com/", // url
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
