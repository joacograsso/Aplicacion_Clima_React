import React from 'react'
import { useState } from 'react'

export const WeatherApp = () => {

    const [ciudad, setCiudad] = useState("")
    const [dataClima, setDataClima] = useState(null)

    const urlBase = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "57c4359c362d9524a672f3dfd60d7c52"

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) fetchClima()
    }

    //Usamos async y await porque es una llamada a una API
    const fetchClima = async() => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&units=metric&lang=es&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error("ocurrio el siguiente error", error)
        }
    }

  return (
    <div className='container'>

        <h1>Aplicacion de clima</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"
            value={ciudad}
            onChange={handleCambioCiudad}
            />
            <button type='submit'>Buscar</button>
        </form>
        
        {/*Si hay datos del clima entonces: */}
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}, {dataClima.sys.country}</h2>
                    <p>Temperatura: {dataClima?.main?.temp}°C</p>
                    <p>Sensacion Termica: {dataClima?.main?.feels_like}°C</p>
                    <p>Temperatura Maxima: {dataClima?.main?.temp_max}°C</p>
                    <p>Temperatura Minima: {dataClima?.main?.temp_min}°C</p>
                    <p>Condicion Meteorologica: {dataClima.weather[0].description}</p>
                    <img src={` https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
                </div>
            )
        }

    </div>
  )
}
