const express = require('express')
const { commentData, fetchComment1, deleteComment1, updateComment1 } = require('../controllers/commentcontroller')
const router = express.Router()
const authorize = require('../authorize')

router.post('/:userId/:postId',authorize(['admin','user']),commentData)

router.get('/:id',fetchComment1)
router.delete('/:id',deleteComment1)
router.put('/:id',updateComment1)


module.exports = router;