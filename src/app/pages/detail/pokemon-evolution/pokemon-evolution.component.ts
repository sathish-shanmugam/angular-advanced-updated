import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../user.service';
@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css']
})
export class PokemonEvolutionComponent implements OnInit {
  @Input() productDetail:{};
  evolutionProduct:{}={};
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let id:string = this.productDetail['id'];
    let imageUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.userService.getEvolution(id).subscribe( data => {
      this.evolutionProduct['level'] = data.chain.evolves_to[0].evolution_details[0].min_level;
      this.evolutionProduct['name'] = data.chain.evolves_to[0].species.name;
      this.userService.getImage(imageUrl+this.evolutionProduct['name']).then(res=>{
        this.evolutionProduct['imageUrl']=res['imageUrl'];
      })
    });
  }

}
