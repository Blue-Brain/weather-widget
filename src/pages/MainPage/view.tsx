//libs 
import {useEffect, useState} from 'react';

//components
import Card from "@components/Card";

//utils
import api from '@api/weather-api';

//interfaces
import { IWeather } from 'src/services/types/weather-type';


const MainPage = () => {
  const [weather, setWether] = useState<Array<IWeather>>([])
  useEffect(() => {
    const par = {
      params: {q: 'London'},
    }
    const data = api.getWeatherPlace(par);
    console.log(data)
    // setWether(data)
  }, [])
  return <>
    <h1>MAIN_PAGE</h1>
    <Card/>
  </>
}

export default MainPage;