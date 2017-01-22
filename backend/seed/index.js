const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;
const db = require('../models').sequelize;

import users from './user';
import company from './company';
import comment from './comment'

db.sync({force: true})
.then(() => User.bulkCreate(users))
.then(() => Company.bulkCreate(company))
.then(() => Comment.bulkCreate(comment))
