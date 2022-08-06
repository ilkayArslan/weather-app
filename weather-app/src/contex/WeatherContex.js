import { createContext, useState } from 'react'
import citiesData from "../data/data.json"
export const WeatherContex = createContext();
export function WeatherProvider({ children }) {
    const [cities, SetCities] = useState(citiesData);
    const [Selectcity, SetSelectCity] = useState({
        "id": 1,
        "name": "Adana",
        "latitude": "37.0000",
        "longitude": "35.3213",
        "population": 2183167,
        "region": "Akdeniz"
    })
    return (
        <WeatherContex.Provider value={[cities, SetCities, Selectcity, SetSelectCity]}>
            {children}
        </WeatherContex.Provider>
    )
}

