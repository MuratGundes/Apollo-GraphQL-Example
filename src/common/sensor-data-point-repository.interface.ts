import { SensorDataPointDocument } from './sensor-data-point-document.interface';

export interface ISensorDataPointRepository {
  findAll(
    id: string,
    from: Date,
    to: Date,
  ): Promise<Array<SensorDataPointDocument>>;
}
