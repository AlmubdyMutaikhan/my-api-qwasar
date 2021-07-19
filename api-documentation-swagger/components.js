module.exports = {
    components: {
      schemas: {
        // User model
        User: {
          type: "object", // data type
          properties: {
            _id: {
              type: "ObjectId", // data-type
              description: "User identification number", // desc
              example: "00e11a40998e581094e43d1a", 
            },
            name: {
              type: "String", // data-type
              description: "User's name", // desc
              example: "Zharkyn", 
            },
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
            date : {
              type : "Date",
              description : "Date of the user's sign up",
              example : "2021-07-09T18:49:36.192+00:00" 
            },
            status : {
              type : "String",
              description : "status of the user (employee or employer)",
              example : "employer"
            },
            jobsPosted : {
              type : "Array",
              description : "Array storing the jobs that this user posted (Warning : required status 'employer')"
            }
          },
        },

        RegisterUser: {
          type: "object", // data type
          properties: {
            name: {
              type: "String", // data-type
              description: "User's name", // desc
              example: "Zharkyn", 
            },
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
          
            status : {
              type : "String",
              description : "status of the user (employee or employer)",
              example : "employer"
            },
         
          },
        },

        


        LogInUser: {
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
    
        Job: {
          type: "object", // data type
          properties: {
            _id: {
              type: "ObjectId", // data-type
              description: "Job identification number", // desc
              example: "00e11a40998e581094e43d1a", 
            },
            job_title: {
              type: "String", // data type
              description: "Job's title", // desc
              example: "Senior Software Engineer", // example of a title
            },
            skills: {
              type: "String", // data type
              description: "The skills that required for this job", // desc
              example: "AWS, Node js, Rust", // example of a completed value
            },
            salary: {
              type: "String", // data type
              description: "Salary of this job described in certain currency", // desc
              example: "€1500977", // example of a title
            },
            location: {
              type: "String", // data type
              description: "The location for this job", // desc
              example: "Palo Alto", // example of a completed value
            },
            date_of_post : {
              type : "Date",
              description : "Date of the posting job",
              example : "2021-07-09T18:49:36.192+00:00" 
            },
          },
        },

        PostingJob: {
          type: "object", // data type
          properties: {
            
            job_title: {
              type: "String", // data type
              description: "Job's title", // desc
              example: "Senior Software Engineer", // example of a title
            },
            skills: {
              type: "String", // data type
              description: "The skills that required for this job", // desc
              example: "AWS, Node js, Rust", // example of a completed value
            },
            salary: {
              type: "String", // data type
              description: "Salary of this job described in certain currency", // desc
              example: "€1500977", // example of a title
            },
            location: {
              type: "String", // data type
              description: "The location for this job", // desc
              example: "Palo Alto", // example of a completed value
            },

          },
        },



       
        GoogleUser: {
          type: "object", //data type
          properties: {
            _id: {
              type: "ObjectId", // data-type
              description: "Google identification number", // desc
              example: "00e11a40998e581094e43d1a", 
            },
            displayName: {
              type: "String", // data-type
              description: "User's name", // desc
              example: "SamLuke", 
            },
            firstName: {
              type: "String", // data type
              description: "User's first name", // desc
              example: "Sam", 
            },
            lastName: {
              type: "String", // data type
              description: "User's last name", // desc
              example: "Luke", 
            },
            email : {
              type : "String",
              description : "User's gmail",
              example : "sam.luke@gmail.com" 
            },
          },
        },
      },
    },
  };