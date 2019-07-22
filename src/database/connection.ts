import * as mongoose from 'mongoose';

export const connection = async (
  connectionString = 'mongodb://localhost/i-garden',
) => {
  return new Promise(async (resolve, reject) => {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
    });

    const db = mongoose.connection;

    db.on('error', err => reject(err));
    db.once('open', () => {
      resolve('connected !');
    });
  });
};
