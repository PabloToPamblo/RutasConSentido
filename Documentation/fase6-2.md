# 🚀 FASE 6 – Sistema de Logros, Diseño Adaptativo y Experiencia Multidispositivo

## 🎯 Objetivo de esta fase

Desarrollar una experiencia de usuario completa donde los logros desbloqueados se muestren de forma clara, atractiva y adaptada a escritorio y móvil. Integrar un sistema dinámico de puntos, descargas, diseño responsive y estructura escalable para futuras integraciones.

---

## 🧱 Tecnologías y herramientas utilizadas

- **React.js** – Componentización de interfaces dinámicas.
- **TypeScript** – Tipado seguro para escalabilidad.
- **Bootstrap** – Sistema de diseño para grillas responsivas.
- **Swiper.js** – Carrusel dinámico para logros.
- **react-responsive** – Adaptación automática a móviles.
- **Django REST Framework** – Backend robusto para API de logros y puntos.
- **AWS S3** – Hosting de imágenes de logros en la nube.
- **GitHub** – Control de versiones profesional.
- **GitHub Actions** – CI con tests automáticos en cada push.
- **Docker** – Entornos replicables para backend.
- **Jenkins** – Despliegue automatizado del entorno (CD).

---

## 🔁 Lógica de integración entre Backend y Frontend

Durante esta fase implementamos la conexión entre la **base de datos en Django** y la **visualización dinámica en React**:

- Se creó un **endpoint RESTful** en Django para listar todos los logros disponibles (`/api/achievements/`).
- Desde el componente `ProfileCard.tsx`, realizamos un **fetch** para obtener todos los logros del servidor.
- Se compararon los `points` del usuario con los puntos requeridos de cada logro.
- Solo los logros desbloqueados son mostrados en el frontend, usando un `filter()` condicional.
- Además, se mostraron con:
  - Imagen desde S3.
  - Nombre y descripción.
  - Botón de descarga (`<a href download />`) que funciona tanto en móvil como escritorio.

Este fetch se hace mediante `useEffect` en React y se ejecuta cada vez que se carga el componente del perfil del usuario, lo que permite mostrar en tiempo real sus progresos sin recargar la web completa.

---

## 📲 Diseño responsive

Adaptamos cada sección principal del sitio para que funcione de forma fluida en todos los dispositivos:

- 🧭 **Navbar** con botón de menú colapsable en móvil.
- 🏠 **Home** reorganizado para mostrar video primero y texto debajo en móviles.
- 🧩 **Carrusel de logros** optimizado para deslizamiento uno a uno en pantallas pequeñas.
- 🧾 **ProfileCard** con logros desbloqueados centrados, descarga directa y visualización elegante.

---

## 🧠 Lecciones aprendidas

- Cómo detectar resoluciones con `react-responsive`.
- Buenas prácticas de accesibilidad móvil y escritorio.
- Separación limpia entre lógica y presentación visual.
- Experiencia gamificada para motivar al usuario.
- Gestión correcta de recursos desde el backend hasta la interfaz visual.

---

## ✅ Estado actual

- [x] Visualización dinámica de logros desbloqueados.
- [x] Botones de descarga que funcionan en móvil y escritorio.
- [x] Diseño adaptado y profesional para todos los tamaños de pantalla.
- [x] API integrada con imágenes desde AWS S3.
- [x] Código versionado, documentado y preparado para entrevistas.

---

📌 **FASE 6 COMPLETADA CON ÉXITO**  
Seguimos construyendo RutasConSentido con ilusión, profesionalidad y propósito 💛🌍
