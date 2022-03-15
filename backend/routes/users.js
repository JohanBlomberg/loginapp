const express = require('express');
const router = express.Router();
const Post = require('../model');

router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country
    });

    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(error => {
    //     res.json({message: error});
    // })


    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(error) {
        res.json({message: error});
    }
});

module.exports = router;