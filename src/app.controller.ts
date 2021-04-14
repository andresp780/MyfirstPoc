import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
//obetener lista de iomagenes segun raza
@Get('/breedImages/:breed')
getBreedImages(@Param('breed') idBreed: string) {
  return this.appService.getBreedImages(idBreed);
}


//obtener lista de sub-raza de perro
  @Get('/breed/:breed/:letter')//aqui indicamos los parametros de entrada 
  getListBreed(@Param('breed') breed: string,@Param('letter') letter: string,) {
    return this.appService.getsubbreedList(breed,letter);
  }

  @Get()
  getInfoTotal() {
    return this.appService.getTotalInfo();
  }
  
}
