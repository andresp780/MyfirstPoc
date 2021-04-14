import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { json } from 'express';

@Injectable()
export class AppService {

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
      amount_of_leter: "sub breeds start with " + letter + " = "+ cont,

      };
  }
  
  async getRandomImage(breed:string) {
 
    const subresult=await Axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    const list:string[] =subresult.data.message;
    const amount= list.length;

    const selectimages:string[] = await (await Axios.get(`https://dog.ceo/api/breed/${breed}/images`)).data.message;
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
  
  async getImageNum(breed:string,nImage: number) {

    const selectimages:string[] = await (await Axios.get(`https://dog.ceo/api/breed/${breed}/images`)).data.message;
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
  
  async getTotalInfo() {

    const total:string[] = await (await Axios.get(`https://dog.ceo/api/breeds/list/all`)).data.message;
    let totalamount=total[4];
    
    
    
    console.log(total);
    console.log(totalamount)

    return  {
      bread:total.length,
      amount_breed:totalamount
      };
  }


  }
function created() {
  throw new Error('Function not implemented.');
}