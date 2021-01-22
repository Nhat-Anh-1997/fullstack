import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECT_URL =
  'mongodb+srv://nhatanh:nhatanh@cluster0.b6p77.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

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
