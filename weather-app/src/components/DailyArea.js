import { useContext, useEffect, useState } from 'react'
import { WeatherContex } from "../contex/WeatherContex"
const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
function Dailyarea() {
    const [dayTemp, SetDayTemp] = useState([]);
    const [cities, SetCities, Selectcity, SetSelectCity] = useContext(WeatherContex);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Selectcity.latitude}&lon=${Selectcity.longitude}&exclude=minutely,hourly&units=metric&lang=tr&appid=ff1f28f9491f246a408b000902acf985`)
            .then(e => e.json())
            .then(r => SetDayTemp(r.daily))
    }, [Selectcity])
    return (
        <div className='container row'>

            {dayTemp.map((e, index) => {
                return (

                    <div className="card col-lg col-md-2 col-6 col-sm-4 justify-content-center" key={index}>
                        <h5 className="card-title text-center mt-2 bg-secondary text-light">{DAYS[new Date(e.dt * 1000).getDay()]}</h5>
                        <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <div><span>{Math.round(e.temp.day)}°C</span>/<span>{Math.round(e.temp.night)}°C</span></div>
                                <div className='text-center bg-warning rounded'>{e.weather[0].description}</div>
                            </div>
                            {dayTemp[0] === e && <div className='bg-info text-center text-white rounded-pill mt-2'>Bugün</div>}

                        </div>
                    </div>
                )
            })}

        </div >
    )
}

export default Dailyarea