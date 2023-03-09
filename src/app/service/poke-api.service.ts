import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  get pokemonList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}pokemon/?offset=0&limit=100`)
      .pipe(
        tap(res => res),
        tap(res => console.log(res))
      );
  }

  /*get pokemonDetails(){
    return null;
  }*/
}
