const router = require("express").Router();
const Company = require('../models').Company;
const Comment = require('../models').Comment;

const getAllUsers = (req,res) => {
  User.findAll().then((users) =>{
    res.send(users)}
  )
};

const postNewUser = (req,res)=>{
  User.create({
    name: req.body.name,
    zipcode: req.body.zipcode,
    karmapoints: req.body.karmapoints
    }).then((users) =>{
    console.log('User created!')
    res.send(users)
  })
};

const getSingleUser = (req,res) => {
	User.findById(req.params.id,
		{include: [Comment],
			{include: [Company]}}
	).then((review)=>{
		res.send(review)
	})
};

router.route('/')
  .get(getAllUsers)
  .post(postNewUser)

router.route('/:id')
  .get(getSingleUser)

module.exports = router