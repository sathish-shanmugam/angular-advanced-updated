import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

import { Product } from '../../product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ProductID:string = '1';  
  productDetail:Product;
  productName:string;
  showLoader:boolean=true;

  constructor(private route: ActivatedRoute, private userService:UserService, private router:Router) { 
    this.ProductID = this.route.snapshot.queryParamMap.get('id');
    this.getDetail();
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.ProductID = this.route.snapshot.queryParamMap.get('id');
      this.getDetail();
    });

  }

  getDetail():void{
    this.showLoader = true;
    this.userService.getDetail(this.ProductID).then((res: {}) => {
      this.showLoader = false;
      this.productDetail = JSON.parse(JSON.stringify(res));
    });
  }

}
