export interface Asistencia {
  id: string;                 // ID autogenerado para cada registro de asistencia
  alumnoId: string;           // ID del alumno (debe coincidir con Usuario.id)
  nombre: string;             // Nombre del alumno
  asignatura: string;         // Asignatura a la que pertenece
  fecha: string;              // Fecha del registro de asistencia
  estado: 'presente' | 'ausente' | 'justificado'; // Estado de asistencia
  comentario?: string;        // Comentarios adicionales (opcional)
}
