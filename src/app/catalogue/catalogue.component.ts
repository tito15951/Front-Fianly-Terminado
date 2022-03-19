import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  public productos:Array<any>=[];
  constructor(private userService:ServicesService) { }

  ngOnInit(): void {
    this.userService.getProducts().subscribe((data:any)=>{

      this.productos=data;
      console.log(this.productos);
    });
  }

}
