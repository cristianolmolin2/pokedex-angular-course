import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemonList: Array<any> = [];
  originalPokemonList: Array<any> = [];
  apiError: boolean = false;

  constructor(private service: PokeApiService) {

  }

  ngOnInit(): void {
    this.service.pokemonList.subscribe(res => {
      console.log(res);
      this.originalPokemonList = res.results;
      this.pokemonList = this.originalPokemonList;
    }, error => {
      this.apiError = true;
    });
    //this.service.pokemonList.subscribe(res => console.log(res));
  }

  findPokemonByName(pokemonName: string) {
    const filter = this.originalPokemonList.filter((res) => {
      return !res.name.indexOf(pokemonName.toLocaleLowerCase())
    });

    this.pokemonList = filter;
    console.log(pokemonName);
  }

}
