import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private service: PokeApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonDetails;
  }

  get pokemonDetails() {
    const pokemonId = this.activeRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemonDetailsById(pokemonId);
    const pokemonName = this.service.getPokemonJapaneseName(pokemonId);

    forkJoin([pokemon, pokemonName]).subscribe(res => console.log(res));

    return console.log(pokemon);
  }

}
