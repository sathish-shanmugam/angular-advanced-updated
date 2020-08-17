import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products:[]=[];
  offsetVal:string='0';
  navigations:any='';
  showLoader:boolean=true;

  constructor(private userService:UserService) { 
    this.getProduct();
  }

  ngOnInit(): void {
    
  }

  navValue(type:string):void{
    let offset:any;
    if(type == 'next'){
      offset = new URL(this.navigations['next']);
      offset = offset.searchParams.get('offset');
    }
    else{
      offset = new URL(this.navigations['prev']);
      offset = offset.searchParams.get('offset');
    }

    this.offsetVal = offset;
    this.getProduct();
  }

  getProduct():void{
    let productListRes:any;

    this.showLoader = true;
    this.navigations = {};
   
    productListRes =this.userService.getProductList(this.offsetVal).subscribe( (res: { previous: any; next: any; results: any; }) => {
      this.navigations['prev'] = res.previous;
      this.navigations['next'] = res.next;
      this.showLoader = false;
      productListRes = res.results;
      this.products = productListRes.map((value:{}, index:number) => {
         this.userService.getImage(value['url']).then((values: any) => {
          value['customList'] =  values;
        });
        return value;
      });
    });

  }

}
