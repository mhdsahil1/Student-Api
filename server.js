const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Student API is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
