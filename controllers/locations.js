import express from 'express';
const router = express.Router();

router.get('/getLocations', (req, res) => {
    res.status(200).json({
        message: "this is get request for locations"
    })
});




export default router;