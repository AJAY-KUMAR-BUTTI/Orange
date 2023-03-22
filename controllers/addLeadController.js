const addLeadModel = require("../model/addLeadModel");

const addLeadPost = async (req, res) => {
  const postData = req.body;

  try {
    const newPost = await addLeadModel.create(postData);
    res.status(201).send({ status: "success", newLead: newPost });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", err });
  }
};
const viewLead = async (req, res) => {
  try {
    const showLead = await addLeadModel.find();
    res.status(200).send({ showLead });
  } catch (err) {
    res.status(500).send({ status: "Error", msg: err });
  }
};
module.exports = {
  addLeadPost,
  viewLead
};
