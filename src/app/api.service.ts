import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

    /**
   * This method returns animals
   */
    getAnimals(): Observable<Animal[]>{
      return this.httpClient.get<Animal[]>(`https://localhost:3000/api/animals`);
    }
}
