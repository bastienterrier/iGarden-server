import * as mongoose from 'mongoose';

export const hensSchema = new mongoose.Schema({
  picker: String,
  date: Date,
  number: Number,
});
