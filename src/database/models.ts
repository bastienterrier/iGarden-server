import * as mongoose from 'mongoose';
import { hensSchema, gardenSchema } from './schemas';

export const remoteHens = mongoose.model('hens', hensSchema);
export const remoteGarden = mongoose.model('gardens', gardenSchema);
