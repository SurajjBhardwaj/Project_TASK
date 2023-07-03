const mongoose = require("mongoose");
const URI = process.env.URI;

const connect = async () => {
  try {
      await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
          console.log("database conenction succ");
      });
  } catch (error) {
    console.log("error at connecting to the database", error.message);
  }
};


module.exports = connect;