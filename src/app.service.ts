import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { json } from 'express';
import { findSourceMap } from 'node:module';


@Injectable()
export class AppService {

  //metodo para obtener list img de breed
  async getBreedImages(breed: string) {
    const result = await Axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    //asi accedo a las imagenes externas

    
    console.log(result.data);
  //mostramos por consola los datos de las imagenes usando .data
    return result.data;
  }
  //metodo obtener subbreed , cantidad de subbreed y cantidad de subbreed segun la letra introducida
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
      amount_of_leter: "sub breeds start with " + letter + " = "+ cont,

      };
  }
  
  //obtener img random segun breed introducida
  async getRandomImage(breed:string) {
 
    const subresult=await Axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    const list:string[] =subresult.data.message;
    const amount= list.length;

    const selectimages:string[] =  (await Axios.get(`https://dog.ceo/api/breed/${breed}/images`)).data.message;
    let valorDado = Math.floor(Math.random()*selectimages.length+1);

    
    let randompath=selectimages[valorDado];


    list.includes(randompath)

    console.log("the breed is: " + breed)
    console.log("number of image is : " + valorDado)
    console.log("this is the path of image : " +randompath);

    return  {
      bread:"the breed is: " + breed,
      random_path:"this is the path of image : " + randompath,
      num_image:"number of image is : " + valorDado,

      };
  }
  
  //obtener img dando el numero de imagen y dando breed
  async getImageNum(breed:string,nImage: number) {

    const selectimages:string[] =  (await Axios.get(`https://dog.ceo/api/breed/${breed}/images`)).data.message;
    let imgPath;
    

    if(nImage>selectimages.length){imgPath="Numero introducido demasiado grande";
    }else{
      imgPath=selectimages[nImage];
    }

    console.log("the breed is: " + breed)
    console.log("this is the path of image : " +imgPath);

    return  {
      bread:"the breed is: " + breed,
      random_path:"this is the path of image : " + imgPath,
      num_image:"number of image is : " + nImage,

      };
  }
  
  //obtener lista total de todas las breed que hay 
  async getTotalInfo() {

    //parseamos JSON a Array obteniendo un array nuevo 
    const breedsJson=  (await Axios.get(`https://dog.ceo/api/breeds/list/all`)).data.message;
    const arrAllBreeds = Object.keys(breedsJson);
    let totalamount=arrAllBreeds.length;
    
    
    
    console.log(arrAllBreeds);
    console.log(totalamount)

    return  {
      bread:arrAllBreeds,
      amount_breed:totalamount
      };
  }

//metodo introducir numero de perros aleatorio y obtenemos img, subbreed y img random
  async getBreedsNumber(breedsNumber: number){
    //obtenemos objeto JSON con la lista entera de razas
    const breedsJson=  (await Axios.get(`https://dog.ceo/api/breeds/list/all`)).data.message;

    //parseamos JSON a Array obteniendo un array nuevo 
    const arrAllBreeds = Object.keys(breedsJson);
    
    //console.log(arrAllBreeds);

    //declaramos array con la longitus del numero introducido
    const randomNumberDogs=[];


    //decalramos el array final que tendremos 
    const finalArray=[];

    //llenamos el array razas aleatorias con numeros random
    for(var i=0;i<breedsNumber;i++){
      const nRandomBreed = Math.floor(Math.random()*arrAllBreeds.length+1);
      const breedName = arrAllBreeds[nRandomBreed];
      var breedImage: String = (await Axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)).data.message;
      randomNumberDogs.push(breedName);
      const subBreed:string[] =breedsJson[breedName]
      
      const a = {
        finalBreed:breedName,
        finaSsubBreed:subBreed,
        finalUrlImage:breedImage
      }
      finalArray.push(a);
    }
    return finalArray;
  }
}

