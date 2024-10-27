import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FQDNServiceService } from './fqdnservice.service';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient, private fqdn : FQDNServiceService) { }

  getFoods(): Observable<string[]> {
    return this.http.get<string[]>(this.fqdn.getFqdnValue()  + "/api/foods");
  }

}
