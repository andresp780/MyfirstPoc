import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { json } from 'express';

@Injectable()
export class AppService {


//metodo para saber el numero de razas que queramos 
  async getBreedsNumber(breedsNumber: number){
    //obtenemos array geeral con razas pero JSON
    const breedsJson= await (await Axios.get(`https://dog.ceo/api/breeds/list/all`)).data.message;

    //parseamos JSON a Array
    const arrAllBreeds = Object.keys(breedsJson);
    //declaramos array con la longitus del numero introducido

    //let arrNumber=[].length=breedsNumber;
    let arrNumber=[];
    arrNumber.length=breedsNumber;
    //console.log(arrnumber.length);


    let finalArray=[];
    //llenamos el array razas aleatorias con numeros random 
    for(var i=0;i<arrNumber.length;i++){
      var breed =Math.floor(Math.random()*arrAllBreeds.length+1);
      arrNumber[i]=arrAllBreeds[breed];
      var breedImage=await (await Axios.get(`https://dog.ceo/api/breed/${arrAllBreeds[breed]}/images/random`)).data.message;
      const subBreed:string[] = await (await Axios.get(`https://dog.ceo/api/breed/${arrAllBreeds[breed]}/list`)).data.message;
      const a={
        finalBreed:arrNumber[i],
        finaSsubBreed:subBreed,
        finalUrlImage:breedImage
      }
      finalArray.push(a);
      //console.log(arrNumber,breedImage,subBreed)
    }
    return finalArray;
  }
}

function created() {
  throw new Error('Function not implemented.');
}
