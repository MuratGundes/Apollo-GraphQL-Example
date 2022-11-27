import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const COLLECTION_NAME = 'machine';

export const MachineSchema = new mongoose.Schema(
  {
    uuid: {
      type: Schema.Types.String,
      maxLength: 80,
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    sensors: [
      {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    ],
    lastKnownPosition: {
      type: Schema.Types.Mixed,
      required: false,
    },
  },
  {
    collection: COLLECTION_NAME,
    minimize: false,
  },
);
