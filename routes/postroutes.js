const express = require('express')
const { blogData, getPosts, getOnePost, delPost, updatePost } = require('../controllers/Postcontrollers')
const router = express.Router()
const authorize = require('../authorize2')

router.post('/:userId',authorize(['admin','user']),blogData)
router.get('/allposts',getPosts)
router.get('/:postId',getOnePost)
router.delete('/:postId',authorize(['admin']),delPost)
router.put('/:id',authorize(['user']),updatePost)

module.exports = router