// Variables globales
let display = document.getElementById('display');
let history = document.getElementById('history');
let currentValue = '0';
let previousValue = '';
let operator = '';
let shouldResetDisplay = false;

// Inicializar display
window.addEventListener('load', () => {
    updateDisplay();
});

/**
 * Añade un número a la pantalla
 * @param {string} num - Número o punto a añadir
 */
function appendNumber(num) {
    // Si acaba de presionarse un operador, comenzar con un nuevo número
    if (shouldResetDisplay) {
        if (num === '.') {
            currentValue = '0.';
        } else {
            currentValue = num;
        }
        shouldResetDisplay = false;
        updateDisplay();
        return;
    }

    // Evitar múltiples puntos decimales
    if (num === '.') {
        if (currentValue.includes('.')) {
            return;
        }
        currentValue += '.';
    } else {
        // Si la pantalla está en '0' y se presiona un número, reemplaza el 0
        if (currentValue === '0') {
            currentValue = num;
        } else {
            currentValue += num;
        }
    }

    updateDisplay();
}

/**
 * Añade un operador
 * @param {string} op - Operador a añadir (+, -, *, /)
 */
function appendOperator(op) {
    // Si hay un operador pendiente y una operación incompleta, calcular primero
    if (operator && !shouldResetDisplay) {
        calculate();
    }

    previousValue = currentValue;
    operator = op;
    shouldResetDisplay = true;
    updateHistory();
}

/**
 * Realiza el cálculo
 */
function calculate() {
    if (!operator) {
        return;
    }

    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    // Validar que ambos valores sean números
    if (isNaN(prev) || isNaN(current)) {
        return;
    }

    // Operaciones
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                showError('No se puede dividir por cero');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Limitar decimales y evitar errores de precisión
    result = Math.round(result * 100000000) / 100000000;

    currentValue = String(result);
    operator = '';
    previousValue = '';
    shouldResetDisplay = true;
    updateDisplay();
    clearHistory();
}

/**
 * Limpia la pantalla
 */
function clearDisplay() {
    currentValue = '0';
    previousValue = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
    clearHistory();
}

/**
 * Elimina el último carácter
 */
function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

/**
 * Cambia el signo del número
 */
function toggleSign() {
    const num = parseFloat(currentValue);
    currentValue = String(num * -1);
    updateDisplay();
}

/**
 * Actualiza la pantalla
 */
function updateDisplay() {
    // Formatea el número para mejor legibilidad
    const num = parseFloat(currentValue);
    
    if (isNaN(num)) {
        display.value = currentValue;
    } else {
        // Muestra máximo 10 dígitos
        if (currentValue.length > 10) {
            display.value = num.toExponential(6);
        } else {
            display.value = currentValue;
        }
    }
}

/**
 * Actualiza el historial
 */
function updateHistory() {
    if (operator) {
        history.textContent = `${previousValue} ${getOperatorSymbol(operator)}`;
    }
}

/**
 * Limpia el historial
 */
function clearHistory() {
    history.textContent = '';
}

/**
 * Obtiene el símbolo del operador
 * @param {string} op - Operador
 * @returns {string} - Símbolo del operador
 */
function getOperatorSymbol(op) {
    const symbols = {
        '+': '+',
        '-': '−',
        '*': '×',
        '/': '÷'
    };
    return symbols[op] || op;
}

/**
 * Muestra un error
 * @param {string} message - Mensaje de error
 */
function showError(message) {
    display.value = message;
    display.classList.add('error');
    
    setTimeout(() => {
        display.classList.remove('error');
        clearDisplay();
    }, 1500);
}

// Soporte para teclado
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Números
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    // Operadores
    else if (key === '+') {
        appendOperator('+');
    } else if (key === '-' && !event.shiftKey) {
        appendOperator('-');
    } else if (key === '*') {
        event.preventDefault();
        appendOperator('*');
    } else if (key === '/') {
        event.preventDefault();
        appendOperator('/');
    }
    // Punto decimal
    else if (key === '.') {
        appendNumber('.');
    }
    // Igual
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    }
    // Borrar
    else if (key === 'Backspace') {
        deleteLast();
    }
    // Limpiar
    else if (key === 'Escape') {
        clearDisplay();
    }
});
