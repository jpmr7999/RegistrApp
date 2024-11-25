import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }
}
