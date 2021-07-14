import { ILocationInfo } from '@Types/weather-type';

const Head = ({location, countryCode}: ILocationInfo) => {
  return <>{location}, {countryCode}</>
}

export default Head