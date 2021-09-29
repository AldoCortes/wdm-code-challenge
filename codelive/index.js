const app = require('express')();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/someproject';
const PORT = 9999;

mongoose.connect(url, { useNewUrlParser: true });

app.use(require('./routes/index'));

app.listen(PORT, () => {
    console.log(`App running at ${PORT}`);
})