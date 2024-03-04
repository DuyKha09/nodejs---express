const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const Schema = mongoose.Schema;
const UserdSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    slug: {
      type: String,
      required: false,
    },
    YOB: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png",
    },
    bio: {
      type: String,
      maxlength: 500,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserdSchema);
module.exports = User;
