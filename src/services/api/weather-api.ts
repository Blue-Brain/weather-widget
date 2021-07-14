import axios from 'axios';
import api from '@utils/defaultAxios';
import serverResponse from './index';

export interface ParamsGetWeather {
  params: {
    q: string
  }
}

const appid = 'bf68996d2a372114b8d51e7154fb28df';
const prefix = 'api.';
const baseDataUrl = `/data/2.5/weather?appid=${appid}`;

const urlImg = 'http://openweathermap.org/img/wn/10d@2x.png';

export default {
  getWeatherPlace: async (params: ParamsGetWeather) => 
    await api({prefix})
      .get(`${baseDataUrl}`, params )
}