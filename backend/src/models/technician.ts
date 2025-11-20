import mongoose, { Document, Schema } from "mongoose";
import { ITechnician } from "@bootcamp/core";

const TechnicianSchema: Schema = new Schema({
  userId: { type: String, require: true },
  categories: { type: [String], default: [] },
  pricePerHour: { type: Number, default: 0 },
  description: { type: String },
  location: { type: String },
  photo: { type: String },
  rating: { type: Number },
});

const Technician = mongoose.model<ITechnician>("technician", TechnicianSchema);

export default Technician;
