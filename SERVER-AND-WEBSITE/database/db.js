const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://db:yeah@cluster0.69gykvd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));

