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

  pokemonDetails: any = {};
  isLoading: boolean = true;
  apiError: boolean = false;

  constructor(private service: PokeApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPokemonDetails;
  }

  get getPokemonDetails() {
    const pokemonId = this.activeRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemonDetailsById(pokemonId);
    const pokemonName = this.service.getPokemonJapaneseName(pokemonId);

    forkJoin([pokemon, pokemonName]).subscribe(res => {
      this.pokemonDetails = res;
      this.isLoading = false;
    }, error => {
      this.apiError = true;
    });

    return console.log(pokemon);
  }

}
