import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  get pokemonList(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}pokemon/?offset=0&limit=251`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map(
          (resPokemon: any) => {
            this.getPokemonDetails(resPokemon.url).subscribe(
              res => resPokemon.status = res
            )
          }
        )
      })
    );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

  getPokemonDetailsById(pokemonId: string) {
    return this.getPokemonDetails(`${environment.apiUrl}pokemon/${pokemonId}`)
  }

  getPokemonJapaneseName(pokemonId: string) {
    return this.http.get<any>(`${environment.apiUrl}pokemon-species/${pokemonId}`).pipe(
      map(
        res => res
      )
    )
  }
}
