const router = require("express").Router();
const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;

const getAllComments = (req,res) => {
  Comment.findAll({}
  ).then((comments) =>{
    res.send(comments)}
  )
};

const postNewComment = (req,res)=>{
  Comment.create(req.body).then((comment) =>{
    console.log('comment created!')
    res.send(comment)
  })
};

const getSingleComment = (req,res) => {
	Comment.findById(req.params.id,
		{include: [Company]}
	).then((comment)=>{
		res.send(comment)
	})
};


router.route('/')
  .get(getAllComments)
  .post(postNewComment)

router.route('/:id')
	.getSingleComment

module.exports = router