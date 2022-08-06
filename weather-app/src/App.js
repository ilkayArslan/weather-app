import Dailyarea from "./components/DailyArea";
import DropDownArea from "./components/DropDownArea";
import FooterArea from "./components/FooterArea";
import { WeatherProvider } from "./contex/WeatherContex"


function App() {
  return (
    <WeatherProvider>
      <div className="bg-light text-black fw-bolder container mt-5 py-3">
        <DropDownArea />
        <Dailyarea />
        <FooterArea />
      </div>
    </WeatherProvider>
  );
}

export default App;
