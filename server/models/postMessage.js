import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    required:true,
    type:String
  },
  id:String
});
const postMessage = mongoose.model('postMessage', postSchema);
export default postMessage;
