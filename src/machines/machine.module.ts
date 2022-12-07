import { Module } from '@nestjs/common';
import { MachineResolver } from './machine.resolver';
import { MachineService } from './machine.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Machine, MachineSchema } from './models/machine.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Machine.name,
        schema: MachineSchema,
      },
    ]),
  ],
  providers: [MachineResolver, MachineService],
})
export class MachineModule {}
