import { Injectable, } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, retry } from 'rxjs';
import { Offer } from '../ViewModels/offer';


@Injectable({
  providedIn: 'root'
})
export class OfferDataService {
 
//get All Offers ==>https://yellowishhiddenwordprocessor--mahmoudadel25.repl.co/offer
//new Offer ==> https://yellowishhiddenwordprocessor--mahmoudadel25.repl.co/offer/new-offer
//delete All Offers ==>https://yellowishhiddenwordprocessor--mahmoudadel25.repl.co/offer/delete-offers
//delete LAt Offer ==>https://yellowishhiddenwordprocessor--mahmoudadel25.repl.co/offer/delete-last


  //private apiUrl = 'https://outstanding-sheath-dress.cyclic.app/data';
  private apiUrl = 'https://yellowishhiddenwordprocessor--mahmoudadel25.repl.co';
  offers:any;
  constructor(private http: HttpClient) { }

  changeType: BehaviorSubject<any> = new BehaviorSubject(null);
    
 
  getAllData(): Observable<any> {
    const url = `${this.apiUrl}/offer`;
     return this.http.get<any>(url);
   
  }
  createEmployee(employee: any): Observable<Offer> {
    return this.http
      .post<any>(
        this.apiUrl + '/offer/new-offer',
        JSON.stringify(employee),
         
      )
      .pipe(retry(1));
  }

  submitForm(formData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append("Access-Control-Allow-Origin", "*");


    return this.http.post(`${this.apiUrl}/offer/new-offer`, formData, { headers });
  }

  deleteAllObjects(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/offer/delete-offers`);
  
  }
  deleteLastObject(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/offer/delete-last`);
  
  }

   
  }
