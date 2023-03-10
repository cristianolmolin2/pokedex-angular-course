import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemonList: Array<any> = [];

  constructor(private service: PokeApiService) {

  }

  ngOnInit(): void {
    this.service.pokemonList.subscribe(res => {
      console.log(res);
      this.pokemonList = res.results;
    });
    //this.service.pokemonList.subscribe(res => console.log(res));
  }

  findPokemonByName() {

  }

}
