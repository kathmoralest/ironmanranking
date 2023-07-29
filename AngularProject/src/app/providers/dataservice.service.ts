import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  //Atributo URL
  private URL: string = 'https://ironmandb-26f8a-default-rtdb.firebaseio.com/collection.json';


  constructor(private http:HttpClient) { }

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }
}
