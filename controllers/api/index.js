const router = require('express').Router();

const userRoutes = require("./userRoutes");
const toDoRoutes = require("./toDoRoutes");

router.use("/users", userRoutes);
router.use("/todo", toDoRoutes);

module.exports = router;