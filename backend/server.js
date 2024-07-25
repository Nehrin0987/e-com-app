const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users'); // Adjusted path as per your file structure
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ashwinharikumar221:achu@cluster0.1zqmugp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
