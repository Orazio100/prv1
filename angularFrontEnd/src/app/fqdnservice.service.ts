import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FQDNServiceService {
  private fqdn: string;

  constructor() {
    // Ottieni l'FQDN all'inizializzazione del servizio
    this.fqdn = this.getFqdn();
  }

  private getFqdn(): string {
    const hostname = window.location.hostname;
    const port = window.location.port ? ':' + window.location.port : '';
    const protocol = window.location.protocol;
    return `${protocol}//${hostname}${port}`;
  }

  public getFqdnValue(): string {
    return this.fqdn;
  }
}