import { Injectable } from '@nestjs/common';
import Axios from 'axios';


@Injectable()
export class AppService {
  getHello(): string {
    return 'My first Nesttt';
  }
 
  //metodo para acceder a los servicios externos, asi obtengo las imagenes
  async getBreedImages(breed: string) {
    //usamos await porque esperamos a obtener la respuesta
    const result = await (await Axios.get(`https://dog.ceo/api/breed/${breed}/images`)).data.message;
    //asi accedo a las imagenes externas
    console.log(result);
    return result;
  }
  
  async getsubbreedList(breed: string) {
    const subresult=await (await Axios.get(`https://dog.ceo/api/breed/${breed}/list`)).data.message;
    
    const list:string[] =subresult;
    const amount= list.length;

    console.log(list,amount);

    return  {
      breeds:list,
      amountt:amount
      };
  }

}
