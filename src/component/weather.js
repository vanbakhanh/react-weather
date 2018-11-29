import React from 'react';

const cardStyles = 'card rounded shadow border-0 text-center text-dark';

class Weather extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center text-uppercase text-white">
              {
                this.props.error !== undefined &&
                <div className="alert alert-danger shadow border-0" role="alert">
                  {this.props.error}
                </div>
              }

              {
                this.props.date !== undefined &&
                <p className="date">{Date(this.props.date)}</p>
              }

              {
                this.props.name !== undefined && this.props.country !== undefined &&
                <h2 className="location">{this.props.name}, {this.props.country}</h2>
              }

              {
                this.props.weather.icon !== undefined &&
                <img className="image my-4" src={require(`./../img/icon/${this.props.weather.icon}.png`)} alt=""></img>
              }

              {
                this.props.main.temp !== undefined &&
                <h1 className="temp">{this.props.main.temp}°C</h1>
              }

              {
                this.props.main.temp_min !== undefined && this.props.main.temp_max !== undefined &&
                <p className="limit">H {this.props.main.temp_max}° - L {this.props.main.temp_min}°</p>
              }

              {
                this.props.weather.description !== undefined &&
                <p className="description">{this.props.weather.description}</p>
              }
            </div>
          </div>
        </div>
        <div className="card-deck my-4">
          {
            this.props.wind.speed !== undefined &&
            <div className="col-sm-3">
              <div className={cardStyles}>
                <div className="card-body">
                  <p className="card-title">Wind</p>
                  <p>{this.props.wind.speed} mph</p>
                </div>
              </div>
            </div>
          }
          {
            this.props.main.humidity !== undefined &&
            <div className="col-sm-3">
              <div className={cardStyles}>
                <div className="card-body">
                  <p className="card-title">Humidity</p>
                  <p>{this.props.main.humidity}%</p>
                </div>
              </div>
            </div>
          }
          {
            this.props.clouds !== undefined &&
            <div className="col-sm-3">
              <div className={cardStyles}>
                <div className="card-body">
                  <p className="card-title">Clouds</p>
                  <p>{this.props.clouds} km/h</p>
                </div>
              </div>
            </div>
          }
          {
            this.props.main.pressure !== undefined &&
            <div className="col-sm-3">
              <div className={cardStyles}>
                <div className="card-body">
                  <p className="card-title">Pressure</p>
                  <p>{this.props.main.pressure} in</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Weather;