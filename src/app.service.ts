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

    //usamos await porque esperamos a obtener la respuesta
    const result = await Axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    //asi accedo a las imagenes externas

    
    console.log(result.data);
  //mostramos por consola los datos de las imagenes usando .data
    return result.data;
  }
  

  async getsubbreedList(breed: string) {
    const subresult=await Axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    
    const list:string[] =subresult.data.message;
    const amount= list.length;

    //que nos indique la cantidad de letras de cada palabra
    let numlett:number[]=[];
    list.forEach(function(a){
      numlett.push(a.length);
    })
    console.log(numlett);

    let total=0;
    for( let i=0;i<numlett.length;i++){
      total=total+numlett[i];
    };

    console.log(total);
    console.log(numlett.sort());


    console.log(list,amount);

    return  {
      breeds:list,
      amountt:amount
      };
  }


}
function created() {
  throw new Error('Function not implemented.');
}