const mongoose = require("mongoose");
const Db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewURLPARSER: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
module.exports = Db;
