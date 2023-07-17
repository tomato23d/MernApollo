const db = require('../config/connection');
const { Book } = require('../models');

const bookData = require('./bookData.json');


db.once('open', async () => {

  await Book.deleteMany({});
  await Book.insertMany(bookData);

  console.log('all done!');
  process.exit(0);
});
