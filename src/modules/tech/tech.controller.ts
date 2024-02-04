import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TechService } from './tech.service';
import { TechInterface } from '../../interfaces/tech.interface';

@Controller('tech')
export class TechController {
  constructor(private readonly techService: TechService) { }

  @Get()
  async findAll(): Promise<TechInterface[]> {
    return this.techService.findAll();
  }

  @Post()
  async create(
    @Body() createEquipmentDto: TechInterface
  ): Promise<TechInterface> {
    return this.techService.create(createEquipmentDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<TechInterface> {
    return this.techService.findById(id);
  }
}
