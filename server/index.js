import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
const CONNECT_URL =
  'mongodb+srv://nhatanh:a12345678@cluster0.gsrzl.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('1');
});




mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set('useFindAndModify', false);
