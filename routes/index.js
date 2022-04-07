const express = require("express")
const router = express.Router()

const todo = require("../models/todo")

const home = require("./modules/home")
const todos = require("./modules/todos")

router.use("/", home)
router.use("/todos", todos)

module.exports = router