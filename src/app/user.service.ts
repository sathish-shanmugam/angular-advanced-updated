import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,
  CanActivate } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private productListURL = 'http://pokeapi.co/api/v2/pokemon/?limit=30&offset=';
  private detailUrl:string='https://pokeapi.co/api/v2/pokemon/';
  private evolutionUrl:string = 'https://pokeapi.co/api/v2/evolution-chain/';

  private currentProductListSource = new BehaviorSubject(null);
  currentProductList = this.currentProductListSource.asObservable();

  isLoggedAdmin:boolean=false;

  constructor(private http:HttpClient) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return localStorage.getItem('productsList') ? true : false;
  }

  getProductList(offset:string):any{
    return this.http.get(this.productListURL+offset)
    .pipe(
      tap(data => this.currentProductListSource.next(data['results'])),
      catchError(this.handleError)
    );
  }

  getImage(url:string):any{
    let customPropertyObj:{}={};
    return this.http.get(url).toPromise().then((res:never) => {
      customPropertyObj['id'] = res['id'];
      customPropertyObj['imageUrl'] = res['sprites']['other']['dream_world']['front_default'];
      return  customPropertyObj;
    });
  }

  getDetail(id:string):any{
    return this.http.get(this.detailUrl+id).toPromise().then((res:never) => {
      return res;
    });
  }

  getNav(url:string):any{
    return this.http.get(url).toPromise().then((res:never) => {
      return res;
    });
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }

  getEvolution(id:string):any{
    return this.http.get(this.evolutionUrl+id);
  }

}

