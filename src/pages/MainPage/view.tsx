//libs 
import {useEffect, useState} from 'react';

//components
import Card from "@components/Card";

//utils
import api from '@api/weather-api';


//interfaces
import { IWeather } from '@Types/weather-type';


const MainPage = () => {
  const [weather, setWether] = useState<Array<IWeather>>([])
  useEffect(() => {
    const par = {
      params: {q: 'London'},
    }
    api.getWeatherPlace(par)
      .then(({data}) => {setWether(data.weather)});
  }, [])
  return <>
    <h1>MAIN_PAGE</h1>
    <Card/>
  </>
}

export default MainPage;