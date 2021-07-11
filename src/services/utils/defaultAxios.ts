import { text } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

const baseURL = `openweathermap.org`;

interface PropsAxios {
  prefix?: string,
  bypassCORS?: boolean,
}

export default ({prefix = ''}: PropsAxios) => axios.create({
  baseURL: `https://${prefix}${baseURL}`, 
  responseType: 'json',
})