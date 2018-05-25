import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderWeather(weatherData){
        const name = weatherData.city.name;
        const temps = weatherData.list.map(weather=>weather.main.temp);
        const pressures = weatherData.list.map(weather=>weather.main.pressure);
        const humidities = weatherData.list.map(weather=>weather.main.humidity);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                  <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                  <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                  <Chart data={humidities} color="red" units="%"/>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <div className="weather-list mt-4">
                <table className="table table-hover table-bordered">
                    <thead className="tr bg-secondary text-white">
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Temprature(K)</th>
                        <th scope="col">Pressure(hpa)</th>
                        <th scope="col">Humidity(%)</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);