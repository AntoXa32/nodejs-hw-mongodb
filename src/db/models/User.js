import { Schema, model } from 'mongoose';

import { emailRegexp } from '../../constants/user.js';

import { handleSaveError, setUpdateOptions } from './hooks.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.post('save', handleSaveError);

userSchema.pre('findOneAndDelete', setUpdateOptions);

userSchema.post('findOneAndDelete', handleSaveError);

const UserCollection = model('user', userSchema);

export default UserCollection;
