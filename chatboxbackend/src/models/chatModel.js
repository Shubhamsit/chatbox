import mongoose from "mongoose";
const chatModel = mongoose.Schema(
  {
    chatname: {
      type: "String",
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [                           // aray of objects
      {
       

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    latestMessages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);
export default Chat;
