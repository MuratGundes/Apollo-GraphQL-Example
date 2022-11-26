import { Module } from '@nestjs/common';
import { MachineResolver } from './machine.resolver';
import { MachineService } from './machine.service';

@Module({
  providers: [MachineResolver, MachineService],
})
export class MachineModule {}
