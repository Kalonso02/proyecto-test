# 🧮 Calculadora Web Moderna

Una calculadora web interactiva, moderna y completamente funcional construida con HTML, CSS y JavaScript puro.

## ✨ Características

- **Operaciones Básicas**: Suma (+), resta (−), multiplicación (×) y división (÷)
- **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones suaves
- **Soporte de Teclado**: Usa tu teclado para realizar operaciones
- **Historial de Operación**: Visualiza la operación actual mientras escribes
- **Manejo de Errores**: Prevención de división por cero y otros errores
- **Responsive**: Se adapta perfectamente a dispositivos móviles
- **Sin Dependencias Externas**: Puro HTML, CSS y JavaScript vanilla

## 🚀 Uso

### Desde el navegador

1. Clona el repositorio:
```bash
git clone https://github.com/Kalonso02/proyecto-test.git
cd proyecto-test
```

2. Abre el archivo `index.html` en tu navegador:
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

O sirve el proyecto usando un servidor local:
```bash
python -m http.server 8000
```

Luego accede a `http://localhost:8000` en tu navegador.

## 🎮 Controles

### Mouse/Touchscreen
Simplemente haz clic en los botones para realizar operaciones.

### Teclado

| Tecla | Función |
|-------|---------|
| `0-9` | Introducir números |
| `.` | Separador decimal |
| `+` | Suma |
| `-` | Resta |
| `*` | Multiplicación |
| `/` | División |
| `Enter` o `=` | Calcular resultado |
| `Backspace` | Eliminar último carácter |
| `Escape` | Limpiar pantalla |

## 📁 Estructura del Proyecto

```
proyecto-test/
├── index.html      # Estructura HTML de la calculadora
├── styles.css      # Estilos y diseño
├── script.js       # Lógica y funcionalidad
└── README.md       # Este archivo
```

## 🎨 Diseño

### Componentes Principales

- **Display**: Pantalla oscura con fuente monoespaciada para mejor legibilidad
- **Historial**: Muestra la operación actual mientras escribes
- **Botones**: Distribuidos en una cuadrícula 4x5
  - **Números**: Botones grises claros
  - **Operadores**: Botones morados
  - **Función**: Botones rojos (C, ⌫, +/-)
  - **Igual**: Botón verde

### Características de Diseño

- Gradiente de fondo llamativo (púrpura a violeta)
- Sombras y efectos de profundidad
- Animaciones suaves en botones
- Responsive design para todos los tamaños de pantalla

## 📱 Responsividad

La calculadora se adapta automáticamente a:
- Pantallas de escritorio (1920px+)
- Tablets (768px - 1024px)
- Móviles (< 480px)

## 🔧 Funciones Principales

### `appendNumber(num)`
Añade un número o punto decimal a la pantalla actual.

### `appendOperator(op)`
Establece un operador y prepara para el siguiente número.

### `calculate()`
Realiza el cálculo según el operador establecido.

### `clearDisplay()`
Limpia la pantalla y resetea todos los valores.

### `deleteLast()`
Elimina el último carácter de la pantalla.

### `toggleSign()`
Cambia el signo del número actual (positivo/negativo).

## 🐛 Manejo de Errores

- **División por cero**: Muestra un mensaje de error y automáticamente limpia la pantalla
- **Múltiples puntos decimales**: Previene que se añadan más de uno
- **Números muy largos**: Muestra en formato exponencial si exceden 10 dígitos
- **Precisión**: Limita resultados a 8 decimales para evitar errores de punto flotante

## 💡 Ejemplos de Uso

```
Suma: 5 + 3 = 8
Resta: 10 - 4 = 6
Multiplicación: 7 × 6 = 42
División: 20 ÷ 4 = 5
Números negativos: -5 × 3 = -15
Decimales: 3.5 + 2.5 = 6
```

## 📝 Notas Técnicas

- Utiliza `parseFloat()` para conversión de strings a números
- Implementa manejo de eventos con `addEventListener`
- Usa grid layout CSS para la disposición de botones
- Incluye animaciones CSS para mejor UX

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, abre primero un issue para discutir qué te gustaría cambiar.

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado por **Kalonso02**

## 🔗 Enlaces

- [Repositorio GitHub](https://github.com/Kalonso02/proyecto-test)
- [Ver Demo](https://kalonso02.github.io/proyecto-test/)

---

**¡Disfruta usando la calculadora!** 🎉