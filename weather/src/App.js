import './App.css';
import Card from './component/Card';
import Input from './component/Input';
import Button from './component/Button';
import { useWeather } from './context/Weather';
import {useEffect} from "react"

function App() {
  const weather= useWeather();
  console.log(weather)

  useEffect(()=>{
    //Get current location
    weather.fetchCurrentUserLocationData()
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button value="Search" onClick={weather.fetchData} />
      <Button value="Refresh" />
      <Card/>
    </div>
  );
}

export default App;
