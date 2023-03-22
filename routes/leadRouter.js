const { Router } = require("express");
const { addLeadPost, viewLead } = require("../controllers/addLeadController");
const addLeadRouter = Router();

addLeadRouter.post('/addLead', addLeadPost);
addLeadRouter.get('/viewLead', viewLead);

module.exports = addLeadRouter;


