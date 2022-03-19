import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './models/users';
import {Product} from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseURL='https://jsonplaceholder.typicode.com/users/';
  baseURLProducts='https://fakestoreapi.com/products/';
  constructor(private http:HttpClient) { }
  /*USÉ DIFERENTES APIS, UNA PARA LOS PRODUCTOS Y OTRA PARA LOS USUARIOS*/

  getUser():Observable<Users>{
    const url=this.baseURL;
    return this.http.get<Users>(url);
  }

  getProducts():Observable<Product>{
    const url=this.baseURLProducts;
    return this.http.get<Product>(url);
  }

}
