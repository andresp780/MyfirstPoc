import {
  Controller,
  Get,
  Query,
  Param
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
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

@Get('/breed/:breed')//aqui indicamos los parametros de entrada 
getImageRandom(@Param('breed') breed: string){
  return this.appService.getRandomImage(breed);
}


@Get('/numImage/:breed/:numImage')//aqui indicamos los parametros de entrada 
getImage(@Param('breed') breed: string,@Param('numImage') nImage: number){
  return this.appService.getImageNum(breed,nImage);
}

@Get('/all-breeds')//aqui indicamos los parametros de entrada 
getInfoTotal(){
  return this.appService.getTotalInfo();
}

//controlador para obtener numero de razas
@Get('/numberBreeds')
getNumberBreeds(@Query('number') number: number) {
  return this.appService.getBreedsNumber(number);
}




}
