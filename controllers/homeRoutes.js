const router = require('express').Router();
const { Todo, User } = require('../models');
const { rawAttributes } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', function (req, res) {
    res.render('homepage');
});

router.get("/", async, (req, res) => {
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

module.exports = router;