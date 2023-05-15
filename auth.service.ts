import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticatedStatus:boolean=false;
  constructor() {

   }
   setAuthenticatedStatus(authenticatedStatus:boolean){
   this.authenticatedStatus=authenticatedStatus;
   }
   getAuthenticatedStatus():boolean{
    
    return this.authenticatedStatus;
   }
}
