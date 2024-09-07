// Obtener los elementos del HTML
const changeColorButton = document.getElementById('changeColorButton');
const resetColorButton = document.getElementById('resetColorButton');
const colorDisplay = document.getElementById('colorDisplay');

// Función para obtener un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Cambiar el color de fondo cuando se hace clic en el primer botón
changeColorButton.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = `Color actual: ${newColor}`;
});

// Reiniciar el color de fondo a blanco cuando se hace clic en el segundo botón
resetColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#FFFFFF';
    colorDisplay.textContent = 'Color actual: #FFFFFF';
});
