import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TechInterface } from '../../interfaces/tech.interface';

@Injectable()
export class TechService {
  constructor(
    @InjectModel('Tech') private readonly techModel: Model<TechInterface>
  ) {}

  async findAll(): Promise<TechInterface[]> {
    return this.techModel.find().exec();
  }

  async create(createEquipmentDto: TechInterface): Promise<TechInterface> {
    const newEquipment = new this.techModel(createEquipmentDto);
    return newEquipment.save();
  }

  async findById(id: string): Promise<TechInterface> {
    return this.techModel.findById(id).exec();
  }
}
