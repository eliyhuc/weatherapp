import { TiWeatherStormy } from "react-icons/ti";
const Day = ({day}) => {
    return(
        <div className="col-lg-2 day">
            <p style={{color:'#F4F4F9'}}>{day.date}</p>
            <TiWeatherStormy color="#B8DBD9" size={70} />
            <h5>{day.day.maxtemp_c}&#176;c</h5>
        </div>
    )
}

export default Day;