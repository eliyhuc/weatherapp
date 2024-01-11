import { TiWeatherShower } from "react-icons/ti";

const CurrentCondition = ({currentCondition}) => {

    const condition = currentCondition.text;

    switch (condition) {
        case 'Moderate rain':
            
            break;
    
        default:
            break;
    }

    return(
        <>
        <div className="col-lg-4 condition">
            {/* <img style={{width:150}} src={currentCondition.icon} /> */}
            <TiWeatherShower color="#ffffff" size={120} />
            <h4>{currentCondition.text}</h4>
        </div>
        </>
    )
}

export default CurrentCondition;