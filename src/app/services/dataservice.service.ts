import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hora } from '../interfaces/horafecha';

@Injectable({
  providedIn: 'root'
})

// github del profe (estas son las apis i think)
export class DataserviceService {

  constructor(private httpclient:HttpClient) { }

  getHora(){
    return this.httpclient.get<Hora>('http://worldtimeapi.org/api/timezone/America/Santiago');
}
}
