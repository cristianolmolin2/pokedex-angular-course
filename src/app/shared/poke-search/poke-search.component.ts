import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  @Output() emitSearch: EventEmitter<string> = new EventEmitter();

  search(pokemonName: string) {
    this.emitSearch.emit(pokemonName);
  }

}
