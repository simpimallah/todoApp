const mongoose = require('mongoose'); // ✅ This line is missing

const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  title: { type: String, index: true },
  description: String,
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium', index: true },
  dueDate: { type: Date, index: true },
  completed: { type: Boolean, default: false, index: true },
  tags: [String],
}, { timestamps: true });

todoSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Todo', todoSchema);
