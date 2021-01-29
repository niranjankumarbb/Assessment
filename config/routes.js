const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middlewares/authentication')
const profileController = require('../app/controllers/profileController')
//const {authenticateUserProfile} = require('../app/middlewares/authentication')

router.post('/users/register', usersController.register) 
router.post('/users/login', usersController.login) 
router.get('/users/account',authenticateUser, usersController.account) 
 
// router.post('/profile',authenticateUser, profileController.create)
// router.get('/profile',authenticateUser,profileController.list)                    
// router.get('/profile/:id',authenticateUser, profileController.show)
// router.put('/profile/:id',authenticateUser, profileController.update)
// router.delete('/profile/:id',authenticateUser, profileController.destroy)

module.exports= router