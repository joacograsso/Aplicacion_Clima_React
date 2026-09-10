# Aplicación de Clima - React

Aplicación web desarrollada con **React** que permite consultar información meteorológica de diferentes ciudades mediante el consumo de una API externa.

El proyecto fue realizado como práctica durante mi formación en React, con el objetivo de trabajar con **componentes, estados, formularios y consumo de APIs REST**.

## Funcionalidades

*  Búsqueda del clima por ciudad.
*  Consulta de temperatura actual.
*  Visualización de sensación térmica.
*  Visualización de temperatura máxima.
*  Visualización de temperatura mínima.
*  Visualización de la condición meteorológica.
*  Visualización del país de la ciudad consultada.
*  Visualización de un ícono representativo de las condiciones climáticas.
*  Diseño adaptable para dispositivos móviles.

## Tecnologías utilizadas

* **React 19**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**
* **Fetch API**

## 🌐 API utilizada

La aplicación obtiene la información meteorológica mediante la API de **OpenWeatherMap**.

La consulta se realiza utilizando:

* Ciudad
* Unidades métricas
* Idioma español

Los datos obtenidos por la API son utilizados para mostrar la información meteorológica en la interfaz.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/joacograsso/Aplicacion_Clima_React.git
```

### 2. Ingresar al proyecto

```bash
cd Aplicacion_Clima_React
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar el proyecto

```bash
npm run dev
```

Luego, abrir en el navegador la dirección indicada por Vite.

## Objetivo del proyecto

Este proyecto fue desarrollado como ejercicio práctico para aplicar conceptos fundamentales de React, principalmente:

* Componentes.
* `useState`.
* Manejo de eventos.
* Formularios.
* Renderizado condicional.
* Funciones asíncronas.
* Consumo de APIs mediante `fetch`.
* Manejo de datos obtenidos desde una API externa.
