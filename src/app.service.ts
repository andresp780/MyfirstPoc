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
    const result = await Axios.get(`https://dog.ceo/api/breed/${breed}/images`);

    console.log(result.data);
    return {
      amount: result.data.message.length,
      breedskgikgk: result.data.message,
    };
  }

  async getRandomImages(n: number): Promise<string[]> {
    let arrayImages: string[] = [];
    for (let i = 0; i < n; i++) {
      const result = await Axios.get(`https://dog.ceo/api/breeds/image/random`);
      console.log(result.data);
      arrayImages.push(result.data.message);
    }
    return arrayImages;
  }
}
