import { Injectable } from '@nestjs/common';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TravelersService {

  constructor(
    private  prisma: PrismaService
  ) {}

 create (body: any){
  return this.prisma.travelers.create({
    data: body
  })
}

  findAll() {
    return this.prisma.travelers.findMany({
      orderBy: [{id_travelers:'desc'}]
    })

  }

  findOne(id: number) {
    return this.prisma.travelers.findFirst({
      where: {id_travelers:id}
    })
  }

async update(id: number, body:any) {
    return await this.prisma.travelers.update({
      where: {id_travelers : id},
      data: body
    });
  }

  async remove(id: number) {
    await this.prisma.travelers.delete({
      where: {id_travelers:id}
    })
    return {
      "exito" : true,
      "mensaje" : "Eliminado correctamente",
      "id" : id
    }
  }
}
