import * as mongoose from 'mongoose';
import { hensSchema } from './schemas';

export const remoteHens = mongoose.model('hens', hensSchema);
