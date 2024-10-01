const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const topicRoutes = require('./routes/topicRoutes');
require('dotenv').config({ path: '.env' })
const cors = require('cors');

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
