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

  @Get('/breedImages/:breed')
  getBreedImages(@Param('breed') idBreed: string) {
    return this.appService.getBreedImages(idBreed);
  }
  @Get('/subbreeds/:breed')
  getSubBreed(@Param('breed') idBreed: string) {
    return this.appService.getsubbreedList(idBreed);
  }




}
