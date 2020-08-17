import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-statistics',
  templateUrl: './pokemon-statistics.component.html',
  styleUrls: ['./pokemon-statistics.component.css']
})
export class PokemonStatisticsComponent implements OnInit {
  @Input() productDetail:{};
  constructor() { }

  ngOnInit(): void {
  }

}
