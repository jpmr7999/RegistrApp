export interface Usuario {
  id: string;                  // ID único del usuario
  usuario: string;             // Nombre de usuario
  contraseña: string;          // Contraseña del usuario
  nombre: string;              // Nombre del usuario
  apellido: string;            // Apellido del usuario
  email: string;               // Email del usuario
  rol: 'estudiante' | 'profesor';  // Rol del usuario
}
