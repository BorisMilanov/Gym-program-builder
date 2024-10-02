// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todolistdb', { useNewUrlParser: true, useUnifiedTopology: true });
const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Create Task Model
const Task = mongoose.model('Task', taskSchema);

// API to create a new task
app.post('/api/tasks', async (req, res) => {
    const { task } = req.body;
    const newTask = new Task({ task });
    await newTask.save();
    res.status(201).json(newTask);
});

// API to fetch all tasks
app.get('/api/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

// API to update task completion status
app.put('/api/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, { completed: req.body.completed }, { new: true });
    res.status(200).json(updatedTask);
});

// API to delete a task
app.delete('/api/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});