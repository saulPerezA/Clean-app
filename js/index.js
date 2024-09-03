// Verifica si el usuario está logueado
const user = JSON.parse(localStorage.getItem('login_success')) || false;
if (!user) {
    window.location.href = 'login.html';
} else {
    // Personaliza el mensaje de bienvenida con el nombre del usuario
    const welcomeMessage = document.querySelector('#welcomeMessage');
    welcomeMessage.textContent = `Bienvenid@, ${user.name}`;
}

// Maneja la acción del botón de cierre de sesión
const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    alert('Hasta pronto!');
    localStorage.removeItem('login_success');
    window.location.href = 'login.html';
});
