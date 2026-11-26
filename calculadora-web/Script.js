const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent.trim();

        if (valor === 'AC') {
            pantalla.value = '0';
            return;
        }

        if (valor === '⌫') {
            if (pantalla.value.length === 1 || pantalla.value === 'Error') {
                pantalla.value = '0';
            } else {
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;
        }

        if (valor === '=') {
            try {
                const operacion = pantalla.value
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');

                const resultado = eval(operacion);

                if (!isFinite(resultado)) {
                    pantalla.value = 'Error';
                } else {
                    pantalla.value = resultado;
                }
            } catch (error) {
                pantalla.value = 'Error';
            }
            return;
        }

        if (pantalla.value === '0' || pantalla.value === 'Error') {

            if (boton.classList.contains('operator')) {
                pantalla.value += valor;
            } else {
                pantalla.value = valor;
            }
        } else {
            pantalla.value += valor;
        }
    });
});
