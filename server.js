const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public assets available
app.use(express.static('public'));

// Toggle routes based on URL
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Listen on port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});