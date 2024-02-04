import * as mongoose from 'mongoose';

export const TechSchema = new mongoose.Schema({
  country: { type: String, required: true },
  type: { type: String, required: true },
  destroyed: { type: Number, required: true },
  abandoned: { type: Number, required: true },
  captured: { type: Number, required: true },
  damaged: { type: Number, required: true },
  total: { type: Number, required: true },
  cost: { type: Number, required: false },
  destructionDate: { type: Date, required: false },
});
