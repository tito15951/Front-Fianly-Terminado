import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {Users} from '../models/users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public incorrect:boolean=false;
  public name:string='hola';
  public username:string='';
  usuarios:Array<any>=[];

  constructor(private router:Router, private userService:ServicesService) {
  }

  ngOnInit(): void {
  }

  ingresar(f:any):void {
    //console.log('El usuario es:',f.value.name, ' y el username es: ',f.value.username);
    let nombre=f.value.username;
    let contrasenia=f.value.name;//La contraseña la asumo como el nombre
    this.userService.getUser().subscribe((data:any)=>{
      this.usuarios=data;
      this.usuarios.forEach(usuario => {
        console.log(usuario)
        if(nombre==usuario.username && contrasenia==usuario.name)
        {this.router.navigateByUrl('products');}
      });
    });
    this.incorrect=true;
  }

}
