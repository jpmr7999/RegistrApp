import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  asistenciasPorAsignatura = [
    {
      nombre: 'Programación de Aplicaciones Móviles',
      registros: [
        { fecha: '2024-08-14', estado: 'Presente' },
        { fecha: '2024-08-22', estado: 'Justificado' }
      ]
    },
    {
      nombre: 'Introduccion al Narco',
      registros: [
        { fecha: '2024-09-01', estado: 'Presente' },
        { fecha: '2024-09-02', estado: 'Ausente' }
      ]
    },
    {
      nombre: 'Arquitectura de planos',
      registros: [
        { fecha: '2024-09-20', estado: 'Presente' }
      ]
    },
    {
      nombre: 'La calle y su actuar',
      registros: [
        { fecha: '2024-09-22', estado: 'Presente' }
      ]
    },
    {
      nombre: 'Arduino',
      registros: [
        { fecha: '2024-09-24', estado: 'Presente' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
