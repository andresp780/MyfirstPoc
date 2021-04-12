import { Injectable } from '@nestjs/common';
import Axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    //accedo a los servicios
    return 'My first Nesttt';
  }

  //metodo para acceder a los servicios externos, asi obtengo las imagenes
  async getBreedImages(breed: string) {
    //Axios.get("https://dog.ceo/api/breed/hound/images");

    //usamos await porque esperamos a obtener la respuesta
    const result = await Axios.get(`https://dog.ceo/api/breed/${breed}/images`);

    //mostramos por consola los datos de las imagenes usando .data
    console.log(result.data);
    return result.data;
  }
}
