import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuario().then(usuarios =>{
      console.log(usuarios);
    });

    /*
    const promesa = new Promise((resolve,reject)=>{

      if (false){
        resolve('Hola mundo');      
      }else{
        reject('Algo salio mal');
      }
    });

    promesa.then((message)=>{
      console.log(message);
    }).catch(error => console.log('Error en la promesa', error));
      console.log('Fin del init'); */
  }

  getUsuario(){

    return new  Promise(resolve =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(resp =>resp.json() )
      .then(body => resolve(body.data));
  });

  
}

}
