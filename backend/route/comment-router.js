const router = require("express").Router();
const User = require('../models').User;
const Company = require('../models').Company;

const getAllComments = (req,res) => {
  Comment.findAll({}
  ).then((comments) =>{
    res.send(comments)}
  )
};

const postNewComment = (req,res)=>{
  Comment.create({
    comments: req.body.comments,
    date: req.body.date,
    task: req.body.task,
    hours: req.body.hours,
    }).then((comment) =>{
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