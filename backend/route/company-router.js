const router = require("express").Router();
const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;


const getAllCompanies = (req,res) => {
  Company.findAll({}
  ).then((companies) =>{
    res.send(companies)}
  )
};

const postNewCompany = (req,res)=>{
  Company.create({
    name: req.body.name,
    address: req.body.address,
    longitude: req.body.longitude,
    latitude: req.body.latitude
    }).then((company) =>{
    console.log('Company created!')
    res.send(company)
  })
};

router.route('/')
  .get(getAllCompanies)
  .post(postNewCompany)

module.exports = router