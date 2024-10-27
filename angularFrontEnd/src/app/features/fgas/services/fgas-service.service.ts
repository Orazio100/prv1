import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FQDNServiceService } from '../../../fqdnservice.service';

@Injectable({
  providedIn: 'root'
})
export class FgasServiceService {
  private apiUrl = 'https://api.example.com/data'; // Cambia con la tua API

  constructor(private http: HttpClient, private fqdn: FQDNServiceService) {}

  // Metodo per ottenere i dati
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.fqdn.getFqdnValue() + '/api/fgas/list');
  }

  // Metodo per aggiornare un elemento
  updateData(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<any>(url, updatedData);
  }
}
