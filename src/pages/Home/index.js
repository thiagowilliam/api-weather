import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

export default function Home() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  const getWeather = async (lat, long) => {
    const res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: 'pt',
          units: 'metric',
        },
      }
    );
    setWeather(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
      <S.Container>
        Você precisa habilitar a localização no browser o/
      </S.Container>
    );
  }
  if (weather === false) {
    return <S.Container>Carregando o clima...</S.Container>;
  }
  return (
    <S.Container>
      <h3>Clima nas suas Coordenadas ({weather.weather[0].description})</h3>
      <hr />
      <ul>
        <li>Temperatura atual: {weather.main.temp}°</li>
        <li>Temperatura máxima: {weather.main.temp_max}°</li>
        <li>Temperatura minima: {weather.main.temp_min}°</li>
        <li>Pressão: {weather.main.pressure} hpa</li>
        <li>Humidade: {weather.main.humidity}%</li>
      </ul>
    </S.Container>
  );
}
