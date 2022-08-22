import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';

@Module({
  imports: [PrismaModule], // import the prisma module here
  controllers: [VehiclesController],
  providers: [VehiclesService]
})
export class VehiclesModule { }