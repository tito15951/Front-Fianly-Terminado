import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public incorrect:boolean=false;
  public enunciadoIncorrect:string='';
  public name:string='hola';
  public username:string='';
  public option:string='';
  public terminos:boolean=false;

  constructor(private router:Router,private userService:ServicesService) { }

  ngOnInit(): void {
  }
  nuevoUsuario(f:any){
    let nombre=f.value.name;
    let username=f.value.username;
    let option=f.value.selectEdad;
    let terminos=f.value.checkTerminos;
    if(nombre && username)
    {
      if(option!=0)
      {
        if(terminos)
        {
          alert('Registrado correctamente');
          this.router.navigateByUrl('');
        }
        else
        {this.enunciadoIncorrect="Debe aceptar terminos y condiciones."
        this.incorrect=true;}
      }
      else
      {this.enunciadoIncorrect="Seleccione una opcion valida."
    this.incorrect=true;}
    }
    else
    {this.enunciadoIncorrect="Ingrese un nombre y un nombre de usuario."
    this.incorrect=true;}

    console.log('Nombre:',nombre);
    console.log('username:',username);
    console.log('option:',option);
    console.log('terminos:',terminos);
  }

}
