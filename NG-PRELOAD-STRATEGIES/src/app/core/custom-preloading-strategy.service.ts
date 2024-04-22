import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, loadRoute: () => Observable<any>): Observable<any> {
    if(route.data && route.data['shouldPreload'] === true){
      return loadRoute();
    }
    return of(false)
    
  }
}
