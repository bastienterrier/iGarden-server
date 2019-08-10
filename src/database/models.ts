import * as mongoose from 'mongoose';
import { hensSchema, gardenSchema, calendarSchema } from './schemas';

export const remoteHens = mongoose.model('hens', hensSchema);
export const remoteGarden = mongoose.model('gardens', gardenSchema);
export const remoteCalendar = mongoose.model('calendars', calendarSchema);
