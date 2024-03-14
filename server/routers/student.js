const exp = require('express');
const router = new exp.Router();
const User = require('../models/userModel');

router.post('/create', async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User Data Not Found !" })
        }
        const saveData = await userData.save();
        res.status(200).json({ msg: 'success', data: saveData, });

    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})
router.put('/upd/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userExData = await User.findById(id);
        if (!userExData) {
            return res.status(404).json({ msg: "Update Data Not Found !" })
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ msg: "Update Data !" });
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})

router.get('/getalldata', async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "Data Not Found !" })
        }
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})
router.get('/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userEx = await User.findById(id);
        if (!userEx) {
            return res.status(404).json({ msg: "Single Data Not Found !" })
        }
        res.status(200).json(userEx);
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})

router.delete('/deleteapi/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "delete Data Not Found !" })
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ msg: 'User Delete !!' })
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})



router.get("/", (req, res) => {
    res.send("hello this is demo check file !")
})

module.exports = router;