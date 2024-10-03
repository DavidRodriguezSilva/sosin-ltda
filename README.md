# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Git

Convención de mensajes de commit semánticos:

```plaintext
<type>[(scope)][!]: <description> [#ticket]

ejemplos:
fix: Pass correlationId on FireAsync. #23001
fix(aws): Pass correlationId on FireAsync. #23001
feat(aws)!: Pass correlationId on FireAsync. #23001

types: feat|fix|refactor|style|doc|build|test
```

### type

Tipo de cambio realizado.

- wip: En progreso, -work in progress-, sólo en ramas de desarrollo
- feat: Nueva funcionalidad
- fix: Corrección de errores detectados y en ambiente de pruebas o producción.
- refactor: Modificación del código sin cambiar su funcionalidad.
- style: Cambios de formato, como corrección de espacios, comas, etc., que no afectan la funcionalidad del código.
- doc: Cambios en la documentación.
- build: Cambios que afectan el sistema de construcción o dependencias externas.
- test: Para agregar o corregir pruebas.

### scope: (Opcional)

El ámbito del cambio. Puede ser el nombre del módulo o componente afectado (por ejemplo, aws, auth, ui).

- auth: Servicios de autenticación o autorización
- Modulos: RADIAN | Factoring Fondeador | Factoring Cliente | Administracion | Vinculaciones | Gestion de facturas | Mandatos

### important !: (Opcional)

Indica que el commit incluye un cambio que rompe compatibilidad (breaking change).

### description:

Una breve descripción del cambio realizado. Debe ser concisa y en tiempo presente.

### #ticket:

(Opcional) Número del ticket o referencia a la tarea relacionada.


#6B3F24 – Marrón oscuro cálido.
#D4A017 – Dorado vibrante.
#000000 – Negro.
#FFFFFF – Blanco.
#F2F2F2 – Gris claro suave.
Para complementar:

#A65E2E – Naranja oscuro o terracota (complementa el marrón y el dorado).
#BEBEBE – Gris medio (transición suave entre el negro y el gris claro).
#B39200 – Dorado más oscuro para crear variaciones dentro de los tonos dorados.
#8B4513 – Marrón chocolate más fuerte que el #6B3F24, para mayor profundidad.
#3B3B3B – Gris oscuro, menos intenso que el negro, pero con buena definición.