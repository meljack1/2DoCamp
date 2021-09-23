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

router.put("/:id", async (req, res) =>{
    try {
        const updatedTodo = toDo.update(
            {
                completed: req.body.completed
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(updatedTodo);
    } catch(error) {
        res.status(400).json(error);
    }
})

router.delete("/:id", withAuth, async(req, res) => {
    try{
        const toDoData = await toDo.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!toDoData) {
            res.status(404).json({message: "no toDo item with this id found! "});
            return;
        }

        res.status(200).json(toDoData);
    } catch (error) {
        res.status(400).json(error);
    }
    
});

module.exports = router;