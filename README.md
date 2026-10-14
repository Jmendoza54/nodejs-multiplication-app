# Aplicación de tablas de multiplicar

Aplicación de línea de comandos escrita en TypeScript. Genera la tabla de multiplicar de una base hasta un límite indicado, puede mostrarla en la consola y la guarda en un archivo de texto.

## Requisitos

- Node.js
- npm

## Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Los scripts de desarrollo ya incluyen una base (`9`), un límite (`30`) y la opción para mostrar la tabla:

```bash
npm run dev
```

Para ejecutar en modo de observación, reiniciando la aplicación cuando cambie un archivo de `src/`:

```bash
npm run dev:nodemon
```

También puedes proporcionar tus propios valores directamente:

```bash
npx ts-node src/app.ts --base 5 --limit 12 --show
```

Opciones disponibles:

| Opción | Alias | Descripción | Valor predeterminado |
| --- | --- | --- | --- |
| `--base` | `-b` | Base de la tabla. Es obligatoria y debe ser positiva. | — |
| `--limit` | `-l` | Último multiplicador; debe ser positivo. | `10` |
| `--show` | `-s` | Muestra la tabla en la consola. | `false` |

La aplicación guarda el archivo en `output2/table-<base>.txt`. Por ejemplo, para la base `5`, crea `output2/table-5.txt`. La carpeta se crea automáticamente si no existe.

## Compilación y ejecución de producción

Compila TypeScript a `dist/`:

```bash
npm run build
```

El siguiente comando compila y luego ejecuta la aplicación compilada. Pasa las opciones después de `--`:

```bash
npm start -- --base 9 --limit 30 --show
```

## Conceptos que se repasan

- **TypeScript y Node.js:** tipado estático, módulos e interacción con el sistema de archivos.
- **Argumentos de CLI con Yargs:** opciones cortas y largas, valores predeterminados y validación de entradas.
- **Interfaces y contratos:** opciones tipadas y la forma `execute` que exponen los casos de uso.
- **Casos de uso:** `CreateTable` genera el contenido de la tabla y `SaveFile` lo escribe en un archivo.
- **Separación de responsabilidades:** `app.ts` lee las opciones y `ServerApp` coordina los casos de uso y decide si muestra el resultado.
- **Herramientas de desarrollo:** `ts-node` para ejecutar TypeScript, `nodemon` para reiniciar durante el desarrollo y `tsc` para compilar.
