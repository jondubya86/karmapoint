const router = require("express").Router();
const User = require('../models').User;
const Comment = require('../models').Comment;

const getAllCompanies = (req,res) => {
  Company.findAll({}
  ).then((companies) =>{
    res.send(companies)}
  )
};

// const postNewCompany = (req,res)=>{
//   Company.create({
//     name: req.body.name,
//     }).then((restaurant) =>{
//     console.log('Restaurant created!')
//     res.send(restaurant)
//   })
// };

router.route('/')
  .get(getAllCompanies)
  // .post(postNewCompany)

module.exports = router