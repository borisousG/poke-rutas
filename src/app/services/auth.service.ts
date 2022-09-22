import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth : boolean = false;

  constructor() { }

  checkAuth() : void {
    if(!localStorage.getItem('auth')){
      this.auth = false;
      return;
    }
    
    this.auth = (localStorage.getItem('auth')!.toLowerCase() == 'true');
  }
}
