const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.ObjectId,
      ref: "Event"
    },
    user: {
      type: Schema.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
