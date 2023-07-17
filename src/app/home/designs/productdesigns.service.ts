import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient , HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:  Product = 
    new Product("1",'Alaa', '90878767' , 'uiu' ) ;

    auth_token =localStorage.getItem("token");

  constructor(private http: HttpClient ) { }


   getProduct()  {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    });
        return this.http.get<Product[]>('api/product/' ,  {headers:header});

  }






}