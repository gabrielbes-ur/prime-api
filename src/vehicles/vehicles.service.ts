import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vehicle } from './entities/vehicle.entity';




@Injectable()
export class VehiclesService {

  constructor(private readonly prisma: PrismaService) { }
  create(vehicle: Prisma.vehicleCreateInput) {
    return this.prisma.vehicle.create({ data: vehicle, });
  }

  findAll() {
    return this.prisma.vehicle.findMany();
  }

  findOne(id: number) {
    return this.prisma.vehicle.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, vehicle: Prisma.vehicleUpdateInput) {
    return this.prisma.vehicle.update({
      where: {
        id,
      },
      data: vehicle,
    });
  }

  remove(id: number) {
    return this.prisma.vehicle.delete({
      where: {
        id,
      },
    });
  }
}
