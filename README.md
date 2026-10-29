# Campeones Squad

Landing page estática de Campeones Squad, construida con HTML, Tailwind CSS compilado y JavaScript.

## Estructura

```
Pagina web campeones/
├── index.html              # Página principal
├── src/
│   └── input.css           # Entrada de Tailwind
├── assets/
│   ├── css/
│   │   ├── tailwind.css    # CSS compilado (no editar a mano)
│   │   └── styles.css      # Estilos propios
│   ├── js/
│   │   └── main.js
│   └── img/
├── package.json
└── README.md
```

## Desarrollo

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Compilar Tailwind mientras se edita:

   ```bash
   npm run watch:css
   ```

   En PowerShell, si `npm` está bloqueado por la política de ejecución, usá:

   ```powershell
   npm.cmd run watch:css
   ```

   También podés usar la tarea de VS Code **“Tailwind: compilar y observar”**, que se inicia al abrir la carpeta.

3. Abrir `index.html` con Live Server:

   - Abrí la carpeta `D:\Pagina web campeones` en VS Code.
   - Hacé clic derecho sobre `index.html`.
   - Elegí **Open with Live Server**.

   La página se abre en `http://127.0.0.1:5500`.

   Si ya tenías abierta una pestaña de `campeones.html`, cerrala: el archivo ahora se llama `index.html`.

> El CSS compilado ya está incluido en `assets/css/tailwind.css`, así que Live Server muestra la página aunque no estés corriendo el watch. El watch solo es necesario si agregás o cambiás clases de Tailwind.

## Producción

```bash
npm run build:css
```

El resultado se genera en `assets/css/tailwind.css`. Subí el proyecto con ese archivo compilado.

## Deploy en Vercel

El proyecto es estático y ya incluye el CSS compilado.

1. Subí los cambios a GitHub.
2. Importá el repositorio en Vercel.
3. Framework Preset: **Other**.
4. Build Command: dejalo vacío.
5. Output Directory: `./`.
6. Deploy.

Si cambiás clases de Tailwind, ejecutá `npm run build:css` antes de hacer push y commiteá el CSS generado.

El botón de WhatsApp debe apuntar al número real: `https://wa.me/54...`.

## Notas

- No editar `assets/css/tailwind.css` directamente: se regenera con el comando de build.
- Las imágenes van en `assets/img/` con nombres en minúsculas y sin espacios.
- El enlace de WhatsApp en `index.html` debe apuntar al número real: `https://wa.me/54...`.
