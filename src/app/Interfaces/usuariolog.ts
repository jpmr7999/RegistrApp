export interface Usuario {
  id?: string; // ID autogenerado
  usuario: string;
  contraseña: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: 'estudiante' | 'profesor'; // Puede ser 'estudiante' o 'profesor'
}
