const express = require('express');
const apiRouter = express.Router();
const Todo = require('../models/todos');

apiRouter.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the ToDo API</h1>
        <br>
        <h2>Available Routes:</h2>
        <ul>
            <li>GET /api/todos?email=youremail@xyz.com - To fetch data from database <a href='/todos?email=dummy@gmail.com'> click here </a> </li>
            <li>POST /api/todos?email=youremail@xyz.com - To Sycn local data with the database </li>
        </ul>
    `);
});

apiRouter.get('/todos', async (req, res) => {
    try {
        const email = req.query.email;
        const todos = await Todo.findOne({ email });
        console.log(todos);
        const data = {
            all: todos === null ? [] : todos.data.all,
            completed: todos === null ? [] : todos.data.completed,
        }
        res.json(data);

    } catch (error) {
        res.json({
            error: error.message
        });
    }


});

apiRouter.post('/todos', async (req, res) => {
    const email = req.query.email;
    const all = req.body.all;
    const completed = req.body.completed;
    console.log(email, all, completed);
    const todo = new Todo({
        email,
        data: {
            all,
            completed
        }
    });

    try {
        const allTodos = await Todo.findOne({ email });
        if (allTodos === null) {
            await todo.save();
            res.json({
                all: todo.data.all,
                completed: todo.data.completed,
            });
        } else {
            const updatedTodo = await Todo.findOneAndUpdate({ email }, { $set: { data: { all, completed } } }, { new: true });
            res.json({
                all: todo.data.all,
                completed: todo.data.completed,
            });
        }

    } catch (error) {
        res.json({
            error: error.message
        });
    }   
});


module.exports = apiRouter;