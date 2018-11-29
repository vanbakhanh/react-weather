import React, { Component } from 'react';
import './App.css';
import Titles from './component/title';
import Form from './component/form';
import Weather from './component/weather';

const API_KEY = '8d2de98e089f1c28e1a22fc19a24ef04';
const initialState = {
  main: {
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    temp_min: undefined,
    temp_max: undefined
  },
  weather: {
    id: undefined,
    main: undefined,
    description: undefined,
    icon: undefined
  },
  wind: {
    speed: undefined,
    deg: undefined
  },
  coord: {
    lat: undefined,
    lon: undefined
  },
  id: undefined,
  date: undefined,
  name: undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  visibility: undefined,
  clouds: undefined,
  error: undefined
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const response = await data.json();
    if (data.status === 200) {
      this.setState({
        main: response.main,
        weather: response.weather[0],
        wind: response.wind,
        coord: response.coord,
        id: response.id,
        date: response.dt,
        name: response.name,
        country: response.sys.country,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
        visibility: response.visibility,
        clouds: response.clouds.all,
        error: undefined
      })
    } else {
      this.setState({ error: response.message })
    };
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Titles />
          <Form loadWeather={this.getWeather} />
          <Weather
            date={this.state.date}
            name={this.state.name}
            country={this.state.country}
            main={this.state.main}
            weather={this.state.weather}
            wind={this.state.wind}
            clouds={this.state.clouds}
            error={this.state.error} />
        </div>
      </div>
    );
  }
}

export default App;
