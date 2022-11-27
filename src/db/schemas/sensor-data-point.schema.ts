import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const COLLECTION_NAME = 'sensorDataPoint';

export const SensorDataPointSchema = new mongoose.Schema(
  {
    uuid: {
      type: Schema.Types.String,
      maxLength: 80,
      required: true,
    },
    value: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    timestamp: {
      type: Schema.Types.Date,
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    minimize: false,
  },
);
