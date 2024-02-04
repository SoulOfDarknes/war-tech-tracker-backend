// create-tech.dto.ts

import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';

export class CreateTechDto {
  @IsOptional()
  @IsString()
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly country: string;

  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsNumber()
  readonly destroyed: number;

  @IsNotEmpty()
  @IsNumber()
  readonly abandoned: number;

  @IsNotEmpty()
  @IsNumber()
  readonly captured: number;

  @IsNotEmpty()
  @IsNumber()
  readonly damaged: number;

  @IsNotEmpty()
  @IsNumber()
  readonly total: number;

  @IsOptional()
  @IsNumber()
  readonly cost?: number;

  @IsOptional()
  @IsDate()
  readonly destructionDate?: Date;
}
