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
      return this.httpClient.get<Animal[]>(`https://localhost:44349/api/animals`);      
    }

   /**
   * This method post animal
   */
       postAnimal(data: Animal):Observable<any>{
        return this.httpClient.post<any>(`https://localhost:44349/api/animals`, data);
      }

      /**
   * This method delete animal
   */
      deleteAnimal(name: string): Observable<any> {
        return this.httpClient.delete(`https://localhost:44349/api/animals/${name}`)
    }
  }

