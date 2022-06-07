import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', /* questa sintassi permette di usare il servizio OVUNQUE nell'app */
})

export class LogService {
  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
}