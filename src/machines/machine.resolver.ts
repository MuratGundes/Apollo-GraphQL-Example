import { Args, Query, Resolver } from '@nestjs/graphql';
import { Machine } from './models/machine.model';
import { MachineService } from './machine.service';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Machine)
export class MachineResolver {
  constructor(private readonly machineService: MachineService) {}

  @Query(() => Machine)
  async machine(@Args('id') id: string): Promise<Machine> {
    const machine = await this.machineService.findOneById(id);

    if (!machine) {
      throw new NotFoundException(id);
    }

    return machine;
  }

  @Query(() => [Machine])
  machines(): Promise<Machine[]> {
    return this.machineService.findAll();
  }
}
