const express = require ('express');
const router = express.Router();
const Post = require('./model')

router.get('/', async (req, res) => {
    try {
        res.json(await Post.find());
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/:postId', async)