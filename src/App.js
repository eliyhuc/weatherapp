import React, {useState} from "react";
import axios from "axios";
import CurrentCondition from "./components/CurrentCondition";
import Day from "./components/Day";

const App = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");

  const loadData = () => {
    setIsLoading(true)
    const baseURL = "http://api.weatherapi.com/v1";
    const apikey = "7a2ed8bfacc04835a45144307240901";
    axios.get(`${baseURL}/forecast.json?key=${apikey}&q=${city}&days=6&aqi=no&alerts=no`)
    .then(res => {
      setData(res.data);
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err.message)
      setIsLoading(false)
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 appbox">

            <div className="row">
              <div className="col-lg-10">
                <input 
                  value={city}
                  type="text"
                  onChange={(e) => {setCity(e.target.value)}}
                  placeholder="Please type your city..."
                  className="form-control" />
              </div>
              <div className="col-lg-2" style={{textAlign:'center'}}>
                {
                  isLoading ? (<>
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  </>) : (<>
                    <button onClick={loadData} className="btn btn-info">Search</button>
                  </>)
                }
              </div>
            </div>

            {
              data ? (<>
              <div className="row">
                <div className="col-lg-12 nodata-container">
                  <h1>{ data.location.name }, { data.location.country }</h1>
                </div>
              </div>
              <div className="row">
                <CurrentCondition currentCondition={data.current.condition} />
                <div className="col-lg-4 condition">
                  <h2>{data.current.temp_c}&#176;c</h2>
                </div>
                <div className="col-lg-4 wind">
                  <p style={{color:'#ffffff', fontSize:20, fontWeight:200}}>
                    Wind: {data.current.wind_kph} kmph<br/>
                    Precip: {data.current.precip_mm} mm<br/>
                    Pressure: {data.current.pressure_mb} mb
                  </p>
                </div>
              </div>
              <div className="row">
                {
                  data.forecast.forecastday.map((day, index) => (
                    <Day key={index} day={day} />
                  ))
                }
              </div>
              </>) 
              
              
              
              
              : (<>
                <div className="row">
                  <div className="col-lg-12 nodata-container">
                    <p style={{color:'#ffffff'}}>Please enter some value in the search section</p>
                  </div>
                </div>
              </>)
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default App;