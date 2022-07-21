const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fmdzpj7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
console.log(MONGO_URL);
// Connect to mongoDB
module.exports = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.log(err);
    });
};
