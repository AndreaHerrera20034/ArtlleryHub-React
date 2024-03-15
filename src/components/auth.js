// Función para verificar si el usuario está autenticado
export const isLoggedIn = () => {
    // Aquí podrías realizar la lógica para verificar si el usuario está autenticado
    // Por ejemplo, podrías revisar si hay un token de autenticación en el almacenamiento local
    const token = localStorage.getItem('token');
    return !!token; // Devuelve true si hay un token, de lo contrario, devuelve false
  };
  
  // Función para cerrar la sesión del usuario
  export const logout = () => {
    // Aquí podrías realizar la lógica para cerrar la sesión del usuario
    // Por ejemplo, podrías eliminar el token de autenticación del almacenamiento local
    localStorage.removeItem('token');
  };