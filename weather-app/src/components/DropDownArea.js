import { useContext } from 'react'
import { WeatherContex } from "../contex/WeatherContex"

function DropDownArea() {
    const [cities, SetCities, Selectcity, SetSelectCity] = useContext(WeatherContex)
    function HandleSelect(e) {
        const newCity = e.target.value.split(",")
        SetSelectCity({ id: newCity[0], name: newCity[1], latitude: newCity[2], longitude: newCity[3], population: newCity[4], region: newCity[5] })
    }
    return (
        <>
            <div className='alert alert-warning p-2'>
                <select onChange={HandleSelect} className="btn btn-primary">
                    {cities.map(c => <option className='text-left' key={c.id} value={[c.id,
                    c.name,
                    c.latitude,
                    c.longitude,
                    c.population,
                    c.region,]} >{c.name}</option>)}
                </select>
            </div>
        </>
    )
}

export default DropDownArea