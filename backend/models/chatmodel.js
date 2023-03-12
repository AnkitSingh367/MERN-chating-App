const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatname: { type: String, trim: true },
    isGroupchat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestmessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
const chat = mongoose.model("Chat", chatModel);
module.exports = chat;
