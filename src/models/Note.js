const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    Title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    timestamp: true,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", NoteSchema);
