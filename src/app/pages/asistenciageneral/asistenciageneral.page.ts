import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistenciageneral',
  templateUrl: './asistenciageneral.page.html',
  styleUrls: ['./asistenciageneral.page.scss'],
})
export class AsistenciageneralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }
}
