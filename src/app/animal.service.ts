import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url: String = 'http://localhost:8080/api/animaux';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  getAnimaux(): Observable<Array<Animal>> {
    return this.http.get<Array<Animal>>(this.url + '/', this.httpOptions);
  }

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(this.url + '/' + id, this.httpOptions);
  }

  addAnimal(animal: Animal): void {
    // this.ponies.push(pony);
    this.http.post<Array<Animal>>(this.url + '/', animal, this.httpOptions)
      .subscribe(() => this.router.navigate(['/']));
  }

  updatePony(id: number, animal: Animal) {
    this.http.put<Array<Animal>>(this.url + '/' + id, animal, this.httpOptions)
      .subscribe(() => this.router.navigate(['/']));
  }

  deletePony(id: number): void {
    this.http.delete(this.url + '/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}
