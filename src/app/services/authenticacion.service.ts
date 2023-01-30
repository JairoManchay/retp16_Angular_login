import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticacionService {

  constructor() { }

  readonly ISLOGGEDKEY = 'islogged';
  public urlUSuarioIntentandoAcceder = '';

  public cambioLogeadoStatusSujeto = new Subject<boolean>();
  public cambioLogeadoStatus$ = this.cambioLogeadoStatusSujeto.asObservable();

  login(){
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.cambioLogeadoStatusSujeto.next(true);
  }

  logout(){
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.cambioLogeadoStatusSujeto.next(false);
  }

  isLoggedIn(url: string){
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if(!isLogged){
      this.urlUSuarioIntentandoAcceder = url;
      return false;
    }

    return true;
  }
}
