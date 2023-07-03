const user = require("../models/userModel");
const bcypt = require("bcrypt");




const strongPassword = async (password) => {
  try {
    const securep = await bcrypt.hash(password, 10);
    console.log(securep);
    return securep;
  } catch (error) {
    // sendding status of error
    res.status(404).send();
    console.log(error);
  }
};




module.exports = {
    strongPassword
}