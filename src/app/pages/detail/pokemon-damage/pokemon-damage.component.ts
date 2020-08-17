import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-damage',
  templateUrl: './pokemon-damage.component.html',
  styleUrls: ['./pokemon-damage.component.css']
})
export class PokemonDamageComponent implements OnInit {
  @Input() productDetail:{};
  constructor() { }

  ngOnInit(): void {
  }

}
