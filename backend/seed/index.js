const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;
const db = require('../models').sequelize;

import users from './user'

db.sync({force: true})
.then(() => User.bulkCreate(users))
.then(() => Chatroom.bulkCreate(chatrooms))
.then(() => Message.bulkCreate(messages))
.then(() => Team.findById(1))
.then(team => {
  team.addChatrooms([1,2,3,4,5])
  team.addUsers([1,2,3,4,5,6,7,8,9])
})
.then(() => Team.findById(2))
.then(team => {
  team.addChatrooms([6,7,8,9])
  team.addUsers([2,10,11,12,13,14])
})
.then(() => Chatroom.findById(1))
.then(chatroom => {
  chatroom.addUsers([1,2,3,4,5,6,7,8,9])
  chatroom.addMessages([1,2,3,4])
})
.then(() => Chatroom.findById(2))
.then(chatroom => {
  chatroom.addUsers([2,3])
  chatroom.addMessages([5,6,7,8])
})
.then(() => Chatroom.findById(3))
.then(chatroom => {
  chatroom.addUsers([2,6,7,9])
  chatroom.addMessages([9,10,11,12,13,14,15,16])
})
.then(() => Chatroom.findById(4))
.then(chatroom => {
  chatroom.addUsers([2,4,5])
  chatroom.addMessages([17,18,19,20,21,22])
})
.then(() => Chatroom.findById(5))
.then(chatroom => {
  chatroom.addUsers([2,4,8])
  chatroom.addMessages([23,24,25,26,27,28,29,30,31])
})
.then(() => Chatroom.findById(6))
.then(chatroom => {
  chatroom.addUsers([2,10,11,12,13,14])
  chatroom.addMessages([32,33,34,35])
})
.then(() => Chatroom.findById(7))
.then(chatroom => {
  chatroom.addUsers([2,13])
  chatroom.addMessages([36,37,38,39])
})
.then(() => Chatroom.findById(8))
.then(chatroom => {
  chatroom.addUsers([11,13,14])
  chatroom.addMessages([40,41,42,43,44,45,46,47])
})
.then(() => Chatroom.findById(9))
.then(chatroom => {
  chatroom.addUsers([2,13,14])
  chatroom.addMessages([49,50,51,52])
})



module.exports = {
  users,
  messages, 
  teams,
  chatrooms
}