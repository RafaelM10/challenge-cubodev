import mongoose from 'mongoose';
import timeZone from 'mongoose-timezone';

export interface IUser extends mongoose.Document {
  name: string;
  lastName: string;
  participation: number;
}

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    participation: { type: Number, required: true },
  },
  { timestamps: true, collection: 'Users' }
);

UserSchema.plugin(timeZone);
UserSchema.index({ name: 'text' }, { default_language: 'none' });

const Users = mongoose.model<IUser>('Users', UserSchema);

export default Users;
