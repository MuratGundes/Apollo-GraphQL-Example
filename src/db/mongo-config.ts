import * as config from 'config';
import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  public async createMongooseOptions(): Promise<MongooseModuleOptions> {
    const mongoConfig = config.get('mongo');

    return {
      uri: `${mongoConfig.type}://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.collection}`,
    };
  }
}
