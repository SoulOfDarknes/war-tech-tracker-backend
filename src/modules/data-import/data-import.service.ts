// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
// import * as csv from 'csv-parser';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { TechInterface } from '../../interfaces/tech.interface';

// @Injectable()
// export class DataImportService {
//   constructor(
//     private httpService: HttpService,
//     @InjectModel('Tech') private readonly techModel: Model<TechInterface>
//   ) {}

//   async importData(url: string): Promise<void> {
//     const results = [];

//     const response = await this.httpService
//       .get(url, { responseType: 'stream' })
//       .toPromise();

//     response.data
//       .pipe(csv())
//       .on('data', (data) => results.push(data))
//       .on('end', async () => {
//         // Тут можна додати логіку для обробки даних та зберігання їх у базі
//         for (const item of results) {
//           // Припускаючи, що item має поля, відповідні вашій моделі TechInterface
//           const newItem = { ...item }; // Трансформуйте дані за потребою
//           await this.techModel.findOneAndUpdate(
//             { name: newItem.name },
//             newItem,
//             { upsert: true }
//           );
//         }
//       });
//   }
// }
