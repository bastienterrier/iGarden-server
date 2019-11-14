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

export const todoSchema = new mongoose.Schema({
  title: String,
  state: String,
  progress: Number,
  date: Date,
  description: String,
});

export const userSchema = new mongoose.Schema({
  name: String,
  date: Date,
  color: String,
});

export const messageSchema = new mongoose.Schema({
  date: Date,
  author: String,
  message: String,
});
