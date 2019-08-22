import * as mongoose from 'mongoose';
import {
  hensSchema,
  gardenSchema,
  calendarSchema,
  todoSchema,
  userSchema,
} from './schemas';

export const remoteHens = mongoose.model('hens', hensSchema);
export const remoteGarden = mongoose.model('gardens', gardenSchema);
export const remoteCalendar = mongoose.model('calendars', calendarSchema);
export const remoteTodo = mongoose.model('todos', todoSchema);
export const remoteUser = mongoose.model('users', userSchema);
