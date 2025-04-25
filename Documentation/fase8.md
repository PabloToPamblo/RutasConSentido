# Fase Final del Proyecto RutasConSentido: Publicación en Amazon Cloud

## 🚀 Objetivo

Finalizar y desplegar la aplicación completa de RutasConSentido en producción sobre infraestructura en la nube (Amazon EC2 + Nginx + Docker), incluyendo:

- Frontend con React + Vite  
- Backend Django + DRF  
- Nginx como reverse proxy  
- Configuración HTTPS con dominio personalizado  
- Favicon e identidad visual  

---

## 📅 Paso a paso

### 1. ♻️ Build del Frontend (React + Vite)

```bash
cd frontend/
sudo chmod -R 755 public/  # Asegurar permisos
npm run build
```

Resultado: carpeta `dist/` generada correctamente.

---

### 2. 💾 Copiar el frontend al servidor web

#### ✈️ Si usas Docker:

```bash
docker cp dist/. nginx:/usr/share/nginx/html
```

#### 🛠️ Si usas Nginx directamente:

```bash
sudo cp -r dist/* /usr/share/nginx/html/
sudo systemctl restart nginx
```

---

### 3. 📅 Dominio + HTTPS

- Dominio adquirido: `rutasconsentido.org`
- Certificado SSL instalado (Let's Encrypt o Cloudflare proxy con redirección HTTPS)
- Nginx configurado con:

```nginx
server {
  listen 80;
  server_name rutasconsentido.org;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  server_name rutasconsentido.org;

  ssl_certificate     /etc/letsencrypt/live/rutasconsentido.org/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/rutasconsentido.org/privkey.pem;

  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri /index.html;
  }

  location /api/ {
    proxy_pass http://web:8000/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

---

### 4. 🌐 Favicon personalizado

- Imagen `IconLog.png` creada con IA ✅
- Convertida a `favicon.ico` mediante [favicon.io](https://favicon.io)
- Colocada en `/public/favicon.ico`
- En `index.html`:

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

---

## ✅ Resultado Final

- Web accesible en: `https://rutasconsentido.org`
- HTTPS activo y dominio propio
- Favicon visible
- Logros se cargan desde `/api/achievements/`
- Todo en Docker y Amazon EC2

---

## 🔧 Próximos pasos

- Configurar CDN o almacenamiento S3 para medios
- Monitoreo con CloudWatch
- Optimizar Lighthouse/SEO
- Agregar PWA + `manifest.json`

---

**Deploy completado ✔️**

Proyecto listo para escalar y compartir con el mundo 🌍