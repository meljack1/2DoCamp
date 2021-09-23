const router = require('express').Router();
const { Todo } = require('../models');

router.get("/", async (req, res) => {
    try {/* Gathering all the to do notes from the user data */
        const toDoData = await Todo.findAll()
   
        /*Below serializes data so the template can read it.*/
        const toDos = toDoData.map((toDo) => toDo.get({ plain: true }));

        res.render("homepage", {
        toDos,
        logged_in: req.session.logged_in
        });

    } catch (error) {
        res.status(500).json(error);
    }

})

router.get("/login", (req, res) => {
    /* we are going to redirect the user into the homepage if they are already logged in. 
    This prevents users from going into the login page when they have already logged in */
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});


module.exports = router;