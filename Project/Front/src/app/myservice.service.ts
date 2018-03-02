

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class MyserviceService {

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:productId');
}

getProductBelowPrice(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice/:price');
}

createProduct(body:any){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct',body);
}

updateProduct(body:any){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/:productId',body);
}

deleteProduct(){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/:productId');
}

getProductsByUsername(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/:username');
}

getProductsByComponent(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/:componentNo');
}


}