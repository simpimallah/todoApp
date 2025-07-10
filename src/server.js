const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // 👈 Import config
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));
app.get('/', (req, res) => {
  res.send('🚀 Server is live on Render!');
});

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
