import { Component, OnInit } from '@angular/core';
import { LocaldbService } from '../../Service/localdb.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  usuarios: any[] = [];

  constructor(private localdbService: LocaldbService) {}

  ngOnInit() {
    this.localdbService.initializeCredentials(); // Inicializar datos si es la primera vez
  }

  ionViewWillEnter() {
    this.cargarUsuarios(); // Cargar lista de usuarios cada vez que entras a la página
  }

  cargarUsuarios() {
    this.usuarios = Object.values(this.localdbService.getUsers()); // Obtener todos los usuarios como un array
  }
}
