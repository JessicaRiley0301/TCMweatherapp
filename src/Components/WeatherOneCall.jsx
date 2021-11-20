import { useState } from 'react';
import ws from "./WeatherOneCall.module.css";
import axios from 'axios';

require('dotenv').config();
console.log(process.env);
const WeatherOneCall = (props) => {
    
    // console.log(process.env.REACT_APP_X);
    // console.log(process.env.REACT_APP_API_KEY);

    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(process.env);
    console.log(API_KEY);
    
    const [input, setInput] = useState("");
    const [coordLat, setCoordLat] = useState(null);
    const [coordLon, setCoordLon] = useState(null);

    const [inputLat, setinputLat] = useState("");
    const [inputLong, setinputLong] = useState("");
    
    // API RESPONSE DATA

    const [name, setName] = useState("");

    const submitHandler1 = (e) => {
        e.preventDefault();
        console.log(input);
        getWeather1(input);
    }
    // const [fDeg, setFdeg] = useState(null);
    
    const [currenttimeZone, settimeZone] = useState("");
    const [currentTemp, setcurrentTemp] = useState("");
    const [currentDescription, setcurrentDescription] = useState("");
    const [currentPressure, setcurrentPressure] = useState("");
    const [currentHumidity, setcurrentHumidity] = useState(null);
    const [currentUVI, setcurrentUVI] = useState(null);
    const [currentClouds, setcurrentClouds] = useState(null);
    const [currentWindSpeed, setcurrentWindSpeed] = useState(null);
    const [currentWindDegree, setcurrentWindDegree] = useState(null);
    const [icon, setIcon] = useState(null);
    const [dailyIcon, setdailyIcon]= useState(null);
    
    const [currentsunrise, setCurrentSunrise] = useState(null);

    const[daily, setDaily] = useState([]);

    const [DayNames, setDayNames] = useState([]);
    const [allInfo, setallInfo] = useState({
        days: [],
        temp: []
    })





    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputLat, inputLong);
        getWeather(inputLat, inputLong);
    }
    const getWeather1 = (input) => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=" + API_KEY)
        .then(res => {
                
            console.log(res.data);
            const API_RES = res.data;
            // set name
            setName(API_RES.name);
            setCoordLat(API_RES.coord.lat);
            // set LON
            setCoordLon(API_RES.coord.lon);

        })
        .catch(err => {
            console.log(err);
            setName("");
        })
}
    const getWeather = (inputLat, inputLong) => {

        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + inputLat + "&lon=" + inputLong + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + API_KEY)
        
        .then(res => {
                
                console.log(res.data.daily);
                const API_RES = res.data;
                var fday = "";
                API_RES.daily.forEach((value,index) => {
                    console.log("value")
                    console.log(value)
                    daily.push(value)
                    // setDaily(...daily, ...value)
                    // var icon2 = value.weather[0].icon;
                    setdailyIcon(value.weather[0].icon)

                    var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long"})
                        // setdaynames([dayname, ...daynames])
                        setDayNames(oldArray => 
                            [dayname, ...oldArray])
                        console.log(DayNames)
                        console.log(dayname)
                        setallInfo(oldArray => ({
                            ...allInfo,
                            days:[...oldArray.days, dayname]

                        }))
                        console.log(allInfo)
                        // console.log(dayname)
                    var dailyIcon = value.weather[0].icon;
                        // console.log(icon)
                    var temp = value.temp.day.toFixed(0);
                        // console.log(temp)



                    

                }
                )
                
                //set current temperature
                setcurrentTemp(Math.round(API_RES.current.temp))
                // set time zone
                settimeZone(API_RES.timezone)
                // weather description
                setcurrentDescription(API_RES.current.weather[0].description)
                // set current weather icon
                setIcon(API_RES.current.weather[0].icon)
                // // pressure, humidity, dew point, uvi, clouds, wind speed, wind degree
                setcurrentPressure(API_RES.current.pressure)
                setcurrentHumidity(API_RES.current.humidity)
                setcurrentUVI(API_RES.current.uvi)
                setcurrentClouds(API_RES.current.clouds)
                setcurrentWindSpeed(API_RES.current.wind_speed)
                setcurrentWindDegree(API_RES.current.wind_deg)
                setCurrentSunrise(API_RES.current.sunrise)

                // setdailyTemp(API_RES.daily)
                // setDaily(API_RES.daily)
                // console.log(API_RES.daily.length)


//da

                // // set LAT
                // setCoordLat(API_RES.coord.lat);
                // // set LON
                // setCoordLon(API_RES.coord.lon);
                // // set icon

            })
            .catch(err => {
                console.log(err);
                // setName("");
            })
    }

    return (
        <div>
            {/* input: {JSON.stringify(input)} <br />
            fDeg: {JSON.stringify(fDeg)} */}
            <div className={ws.wrapper}>
                <h1>OpenWeather API 🌤</h1>
                <hr />
                <div className={ws.formGroup}>
                    <h5> Enter city name for coordinates </h5>
                    <p> or look up your exact coordinates in google maps </p>
                <form onSubmit={submitHandler1}>
                        {/* <label htmlFor="cityName">City:</label> */}
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            name="cityName"
                            id="cityId"
                            placeholder="city name"
                        />
                        <button type="submit">Submit</button>
                    </form>
                    { 
                        name ? (
                            <div>
                                <p>Lat: {coordLat} <br/>Lon: {coordLon} </p>
                            </div>
                        ) :
                        <div> Please enter a valid city </div>
                    }
                    <h5> Enter latitude and longitude </h5>
                    <form onSubmit={submitHandler}>
                        {/* <label htmlFor="cityName">City:</label> */}
                        
                        <input
                            value={inputLat}
                            onChange={e => setinputLat(e.target.value)}
                            type="text"
                            name="latitude"
                            id="latitude"
                            placeholder="latitude"
                        />
                        
                        <input
                            value={inputLong}
                            onChange={e => setinputLong(e.target.value)}
                            type="text"
                            name="longitude"
                            id="longitude"
                            placeholder="longitude"
                        />
                        <button type="submit">Submit</button>
                    </form>
                    
                
                    {/* *********** DISPLAY CARD ********** */}
                    {
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{currentTemp} º F</td>
                                </tr>
                                <tr>
                                    <td>Cloudiess</td>
                                    <td>{currentClouds} %</td>
                                </tr>
                                {/* <tr>
                                    <td>Pressure</td>
                                    <td>1019</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>62</td>
                                </tr>
                                <tr>
                                    <td>Wind Speed</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Rain</td>
                                    <td>Light Rain</td>
                                </tr>
                                <tr>
                                    <td>UVI</td>
                                    <td>0.89</td>
                                </tr> */}
                            </tbody>
                        </table>
                    }

                    {
                        currenttimeZone ? (
                            
                            <div className={ws.card}>
                            <h3>Temperature: {currentTemp} º F  {currentDescription}</h3>
                            <img src={"http://openweathermap.org/img/wn/" + icon + "@4x.png"} alt="weather icon" height="150px"/>
                            <p>Pressure: {currentPressure} hPa </p>
                            <p>Humidity: {currentHumidity} % </p>
                            <p>UVI Index: {currentUVI}</p>
                            <p>Cloudiness: {currentClouds} % </p>
                            <p>Wind Speed: {currentWindSpeed} mph</p>
                            <p>Wind Degrees: {currentWindDegree}</p>

                        </div>
                        ) :
                        <div className={ws.noCard}>Please enter a valid input</div>
                    }
                    {/* ******** NO CARD ************* */}


                    {daily.map((v, i) => {

                    return (
                        <div key={i}>
                            <p>{new Date(v.dt * 1000).toLocaleDateString("en", {weekday: "long",})}</p>
                            <p>{new Date(v.sunrise * 1000).toLocaleTimeString("en")}</p>
                            <p>{v.moon_phase}</p>.
                            <img src={"http://openweathermap.org/img/wn/" + v.weather[0].icon + "@4x.png"} alt="weather icon" height="100px"/> 
                        
                        
                        </div>
                    )
                    }


                    )
                    }

                    
                    <p>
                        data by <a href="https://openweathermap.org/">OpenWeatherMap.org</a>
                    </p>
                    </div>
                    </div>
                    </div>
    )
}

export default WeatherOneCall;