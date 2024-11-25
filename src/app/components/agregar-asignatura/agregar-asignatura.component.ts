import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsignaturasService } from '../../services/asignaturas.service';


@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.component.html',
  styleUrls: ['./agregar-asignatura.component.scss'],

})
export class AgregarAsignaturaComponent  implements OnInit {

  formulario: FormGroup;

  constructor( private AsignaturasService: AsignaturasService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      clases: new FormControl(),
      descripcion: new FormControl(),
    })
   }

  ngOnInit(): void  {}

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.AsignaturasService.agregarAsignatura(this.formulario.value);
    console.log(response)
  }

  
}
