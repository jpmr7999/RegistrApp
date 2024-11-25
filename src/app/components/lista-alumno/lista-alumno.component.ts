import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumnos } from 'src/app/interfaces/alumnos';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss'],
})
export class ListaAlumnoComponent  implements OnInit {

  alumnos: Alumnos[];

  constructor(private alumnosService: AlumnosService) {
    this.alumnos = [{
      nombre: 'pepe',
      presente: 10,
      ausente: 8,
    }];
   }

  ngOnInit(): void {
    this.alumnosService.getAlumno().subscribe(alumnos => {
      //console.log(alumnos);
      this.alumnos = alumnos;

    })
  }

  async onClickDelete(alumno: Alumnos) {
    const response = await this.alumnosService.deleteAlumno(alumno);
    console.log(response);
  }
  goBack() {
    window.history.back(); // Navega a la página anterior usando el historial del navegador
  }

}
