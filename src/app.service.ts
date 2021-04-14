import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { json } from 'express';

@Injectable()
export class AppService {

  getHello(): string {
    //accedo a los servicios
    return 'My first Nesttt';
  }

  //metodo para acceder a los servicios externos, asi obtengo las imagenes
  async getBreedImages(breed: string) {

    //usamos await porque esperamos a obtener la respuesta
    const result = await Axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    //asi accedo a las imagenes externas

    
    console.log(result.data);
  //mostramos por consola los datos de las imagenes usando .data
    return result.data;
  }
  async getsubbreedList(breed: string, letter: string) {
 
    const subresult=await Axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    const list:string[] =subresult.data.message;
    const amount= list.length;
    var cont=0;
  
    cont=list.filter(breed =>(breed.startsWith(letter))).length

    console.log(list);
    console.log(subresult.data.message.length);
    console.log(cont);
    return  {
      breeds:list,
      amountt:"total amount of breeds = " +amount,
      amount_of_leter: "sub breeds start with " + letter + " = "+ cont
      };
  }
}

function created() {
  throw new Error('Function not implemented.');
}