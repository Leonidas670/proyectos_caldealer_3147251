import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelersService } from './travelers.service';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';

@Controller('travelers')
export class TravelersController {
  constructor(private readonly travelersService: TravelersService) {}

  @Post()
  create (@Body () body:any){
    return this.travelersService.create(body)
  }
  

  @Get()
  findAll() {
    return this.travelersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:any) {
    return {
      "Exito" : true,
      "Mensaje" : "Actualizado correctamente",
      "id" : id,
      "data" : this.travelersService.update(+id,body)

    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelersService.remove(+id);
     }
}
