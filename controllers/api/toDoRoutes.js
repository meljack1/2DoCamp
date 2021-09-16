const router = require('express').Router();
const toDo = require("../../models/Todo");
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async(req, res) =>{
   
    try {
        const newToDo = await toDo.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newToDo);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;