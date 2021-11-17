const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use(require('./routes/todos.js'));
const mongodb = 'mongodb+srv://ckmobile:ckmobile123@cluster0.niuuw.mongodb.net/item-database?retryWrites=true&w=majority';
app.get('/', (req, res) => {
res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));


