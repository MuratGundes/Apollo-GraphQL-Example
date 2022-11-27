import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MachineModule } from './machines/machine.module';
import { SensorDataPointModule } from './sensor-data-points/sensor-data-point.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './db/mongo-config';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    MachineModule,
    SensorDataPointModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    DbModule,
  ],
})
export class AppModule {}
