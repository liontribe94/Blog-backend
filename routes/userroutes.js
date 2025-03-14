const express = require('express')
const { signUp, signIn, oneUser, twoUser } = require('../controllers/usercontroller')
const router = express.Router()



router.post('/register',signUp)
router.post('/login',signIn)

router.get('/:id',oneUser)
router.delete('/:id',twoUser)
console.log("user routes connected")

module.exports = router
