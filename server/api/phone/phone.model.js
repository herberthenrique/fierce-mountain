import mongoose, { Schema } from 'mongoose';

let PhoneSchema = new Schema({
  number: String,
  ddd: String
})

export default mongoose.model('Phone', PhoneSchema);
