import { Module } from '@nestjs/common';
import { MachineResolver } from './machine.resolver';
import { MachineService } from './machine.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [MachineResolver, MachineService],
})
export class MachineModule {}
