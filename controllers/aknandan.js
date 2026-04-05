import express from 'express';
const router = express.Router()


router.get('/getAknandan', (req, res) => {
    res.status(200).json({
        message: "this is aknandan get request"
    })
})

export default router;




