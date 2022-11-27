import { Args, Query, Resolver } from '@nestjs/graphql';
import { Machine } from './models/machine.model';
import { MachineService } from './machine.service';
import { NotFoundException } from '@nestjs/common';
import { GetMachineArgs } from './dto/machine.args';

@Resolver(() => Machine)
export class MachineResolver {
  constructor(private readonly machineService: MachineService) {}

  @Query(() => Machine)
  async machine(@Args() args: GetMachineArgs): Promise<Machine> {
    const machine = await this.machineService.findOne(args);

    if (!machine) {
      throw new NotFoundException(args.name);
    }

    return machine;
  }

  @Query(() => [Machine])
  machines(): Promise<Machine[]> {
    return this.machineService.findAll();
  }
}
