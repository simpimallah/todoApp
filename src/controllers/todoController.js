const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const newTodo = new Todo({ ...req.body, userId: req.user.id });
  const saved = await newTodo.save();
  res.status(201).json(saved);
};

exports.updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
