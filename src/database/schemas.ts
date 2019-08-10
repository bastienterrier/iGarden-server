import * as mongoose from 'mongoose';

export const hensSchema = new mongoose.Schema({
  picker: String,
  date: Date,
  number: Number,
});

export const gardenSchema = new mongoose.Schema({
  user: String,
  date: Date,
  summary: Object,
});

export const calendarSchema = new mongoose.Schema({
  user: String,
  date: Date,
});
