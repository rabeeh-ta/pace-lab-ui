require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://rabeeh:${process.env.MONGO_PASSWORD}@prod-cluster.ctha1.mongodb.net/codeShareFeature?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Mongodb Connected');
  })
  .catch((e) => {
    console.log(e);
  });
