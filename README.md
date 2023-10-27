# ACTotal - Challenge

Challenge realizado para la empresa ACTotal, donde la tarea era realizar una aplicación web con su propio diseño y adaptable para todos los dispositivos, el cual tenga su formulario para la creación de nuevos datos y una lista de todos estos datos donde cada solo mostraremos 8 por página.

## Instalación

Usando el paquete [npm](https://www.npmjs.com/) para instalar ACTotal - Challenge.

```bash
npm install
```
Usando el paquete [yarn](https://yarnpkg.com/).

```bash
yarn install
```

## Probar Aplicación

```bash
npm run dev
```

Usando el paquete [yarn](https://yarnpkg.com/).

```bash
yarn run dev
```

## Endpoints - Api

```bash
 # [POST] - https://actotal.onrender.com/api/person/create -> y recibe por body { name: 'example', email: 'example@mail.com', phone: 323232323 }
 # [GET] - https://actotal.onrender.com/api/person?page=1&limit=8 -> recibe por params el limit y el page
```

## Deployment
[BACKEND](https://actotal.onrender.com/) - Api que se consume para crear y obtener datos\
[FRONTEND](https://challenge-ac-total.vercel.app/)