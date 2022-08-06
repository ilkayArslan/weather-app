import { useContext, useEffect, useState } from 'react'
import { WeatherContex } from "../contex/WeatherContex"

function FooterArea() {
    const [cities, SetCities, Selectcity, SetSelectCity] = useContext(WeatherContex);

    return (
        <div className="alert alert-info text-center" role="alert" >
            {Selectcity.name}
        </div >
    )
}

export default FooterArea