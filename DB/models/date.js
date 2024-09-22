import mongoose, { Schema, model } from "mongoose";

const dateSchema = new Schema(
  {
    frontDate:Date,
    backDate:Date
  },
);
const dateModel =mongoose.models.Date || model("Date", dateSchema);
export default dateModel;
