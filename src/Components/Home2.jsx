import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

require('dotenv').config();

const Home2 = (props) => {

    const [userLatitude, setUserLatitude] = useState(null)
    const [userLongitude, setUserLongitude] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude + " " + position.coords.longitude)
            setUserLatitude(position.coords.latitude);
            setUserLongitude(position.coords.longitude);
            })
        })

    // useEffect(() => {
    //     navigator.geolocation.getcurrentposition((pos) =>{
    //       console.log(pos.coords.latitude + " " + pos.coords.longitude) // display VALUE
    //         const newUserPos = { 
    //             lat: pos.coords.latitude,
    //             long: pos.coords.longitude,
    //         };
    //         setUserPos(newUserPos) // store data in usestate
    //         console.log(newUserPos) // Display your values
    //         }, (err) => {
    //             console.log(err);
    //         }, options);
    // }
    // })
    // }, [])
    

    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(process.env);
    console.log(API_KEY);

    const [input, setInput] = useState("");
    const [coordLat, setCoordLat] = useState(null);
    const [coordLon, setCoordLon] = useState(null);

    const [inputLat, setinputLat] = useState("");
    const [inputLong, setinputLong] = useState("");

    const [name, setName] = useState("");

    const submitHandler1 = (e) => {
        e.preventDefault();
        console.log(input);
        getWeather1(input);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputLat, inputLong);
        getWeather(inputLat, inputLong);
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
    const [currentsunset, setCurrentSunset] = useState(null);
    const [currentmoonrise, setCurrentMoonrise] = useState(null);
    const [currentmoonset, setCurrentMoonset] = useState(null);
    const [currentmoonphase, setCurrentMoonphase] = useState(null);
    const [currenttempday, setCurrentTempDay] = useState(null);
    const [currenttemphigh, setCurrentTempHigh] = useState(null);
    const [currenttemplow, setCurrentTempLow] = useState(null);

    const[daily, setDaily] = useState([]);

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
                    console.log("path1")
                    console.log(API_RES.daily[0].moonrise)
                    API_RES.daily.forEach((value,index) => {
                        console.log("moonrisepath")
                        console.log(value)
                        console.log(value.moonrise)
                        
                        daily.push(value)
                        // setDaily(...daily, ...value)
                        // var icon2 = value.weather[0].icon;
                        setdailyIcon(value.weather[0].icon)
    
                        // var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                        //     weekday: "long"})
                        //     // setdaynames([dayname, ...daynames])
                        //     setDayNames(oldArray => 
                        //         [dayname, ...oldArray])
                        //     console.log(DayNames)
                        //     console.log(dayname)
                        //     setallInfo(oldArray => ({
                        //         ...allInfo,
                        //         days:[...oldArray.days, dayname]
    
                        //     }))
                        //     console.log(allInfo)
                        //     // console.log(dayname)
                        // var dailyIcon = value.weather[0].icon;
                        //     // console.log(icon)
                        // var temp = value.temp.day.toFixed(0);
                        //     // console.log(temp)
    
    
    
                        
    
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
                    setCurrentSunset(API_RES.current.sunset)
                    setCurrentMoonrise(API_RES.daily[0].moonrise)
                    setCurrentMoonset(API_RES.daily[0].moonset)
                    setCurrentMoonphase(API_RES.daily[0].moon_phase)
                    setCurrentTempDay(Math.round(API_RES.daily[0].temp.day))
                    setCurrentTempHigh(Math.round(API_RES.daily[0].temp.max))
                    setCurrentTempLow(Math.round(API_RES.daily[0].temp.min))
                    // setCurrentMoonset(API_RES.daily[0].moonset)
    
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
        
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img className="Mainpic" src="https://beijingchinesemedicalcenter.com/wp-content/uploads/2017/03/Dr.-Baolin-Wu-Profile-Pic.jpg" alt="drwu" />
                </div>
                <div class="col-sm">
                    <div>
                    <h3>Welcome</h3>
                    <p>
                        With his 26 years of practice in Santa Monica and his over 40 years of accumulated 
                        experience in the field of TCM and Acupuncture, Dr. Wu has avast amount of 
                        knowledge and understanding in medical 
                        science and TCM. Dr. Wu has effectively treated a broad spectrum of
                        diseases and illnesses over the years. He is a Seventh Generation Family Lineage 
                        Practitioner of Traditional Chinese Medicine
                    </p>
                    </div>
                    <div>
                    <h3>Acupuncture</h3>
                    <p>
                        At Beijing Medical Center we focus primarily on Traditional Chinese Medicine.
                        We offer a wide variety of treatments from Acupuncture,
                        Herbs, Massage, Chiropractic, Moxa, Fire Cupping, Acupressure, Gua Sha, Tui Na for optimal and
                        natural healing. 
                    </p>
                    </div>
                    <a href="/acupuncture" class="link-primary">Learn More About Acupuncture</a>
                </div>
            </div>
            <div className="row2">
            
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
                    <p>Your Current Location: </p>
                    <p>Latitude: {userLatitude} </p>
                    <p>Longitude: {userLongitude} </p>
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
            
            </div>
            {
                currenttimeZone ? (
                    <div className="row">
                        <h1 className="Title">Weather Forecast</h1>
                        <div className="col-sm">
                        <h2 className="Head"> Current </h2>
                        <table class="table table-sm table-">
                            <tbody>
                                <tr>
                                    <td> Weather </td>
                                    <td> {currentDescription}<img src={"http://openweathermap.org/img/wn/" + icon + "@4x.png"} alt="weather icon" height="30px"/> </td>
                                </tr>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{currentTemp} º F</td>
                                </tr>
                                <tr>
                                    <td>Cloudiness</td>
                                    <td>{currentClouds} %</td>
                                </tr>
                                <tr>
                                    <td>Pressure</td>
                                    <td>{currentPressure} hPa</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{currentHumidity} % </td>
                                </tr>
                                <tr>
                                    <td>Wind Speed</td>
                                    <td>{currentWindSpeed} mph</td>
                                </tr>
                                <tr>
                                    <td>Wind Degrees</td>
                                    <td>{currentWindDegree}</td>
                                </tr>
                                <tr>
                                    <td>UVI</td>
                                    <td>{currentUVI}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-sm">
                        <h2 className="Head"> Today </h2>
                        <table class="table table-sm">
                            
                            <tbody>
                                <tr>
                                    <td>Today's Average Temp</td>
                                    <td>{currenttempday}° F, </td>
                                </tr>
                                <tr>
                                    <td>Today's Hi/Low</td>
                                    <td>{currenttemphigh}° F, {currenttemplow}° F</td>
                                </tr>
                                <tr>
                                    <td>Sunrise</td>
                                    {/* <td>{currentsunrise}</td> */}
                                    <td>{new Date(currentsunrise * 1000).toLocaleTimeString("en")}</td>
                                </tr>
                                <tr>
                                    <td>Sunset</td>
                                    <td>{new Date(currentsunset * 1000).toLocaleTimeString("en")}</td>
                                </tr>
                                <tr>
                                    <td>Moonrise</td>
                                    <td>{new Date(currentmoonrise * 1000).toLocaleTimeString("en")}</td>
                                </tr> 
                                <tr>
                                    <td>Moonset</td>
                                    <td>{new Date(currentmoonset * 1000).toLocaleTimeString("en")}</td>
                                </tr>
                                <tr>
                                    <td>Moon Phase</td>
                                    <td>{currentmoonphase}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-sm">
                        <h2 className="Head"> This Week </h2>

                        {daily.map((v, i) => {

                        return (
                            <div>
                                <table key={i} class="table table-sm table">
                                
                                <tbody>
                                <tr>
                                    <td>{new Date(v.dt * 1000).toLocaleDateString("en", {weekday: "long",})}</td>
                                    <td>{v.temp.day.toFixed(0)}</td>
                                    <td><img src={"http://openweathermap.org/img/wn/" + v.weather[0].icon + "@4x.png"} alt="weather icon" height="30px"/> </td>
                                </tr>
                                </tbody>
                                </table>
                            
                            
                            </div>
                        )
                        }


                        )
                        }
                        </div>
                    </div>
                ):
                <div className="row"> Please enter a valid lat and long</div>
            }
            
            <div className="row">
                <div>

                    <div className="row">
                        <div className="row">
                        <h2 className="Title"> Custom Health Advice According to Today's Weather Forecast </h2>
                        
                        </div>
                        <div className="row">
                            <div className="col-sm">
                            <img className="image" src="https://uspest.com/wp-content/uploads/2019/01/us-pest-asian-lady-beetle-e1550175713869.jpg" alt="inputimage" width="450" height="300"/>
                            </div>
                            <div className="col-sm">
                                <h3>Jingzhe Solar Term-<i>Insects Awakening</i></h3>
                                <h4>March 5, 2021</h4>
                                <p>
                                    "Jingzhe" is a seasonal period in traditional Chinese
                                    Medicine that indicates the weather is getting warmer and
                                    the spring time is around the corner. It is at this time, thunder
                                    from rain storms can be heard which wakes up the inects sleeping
                                    underground. Modern meteorology explains that thunder heard
                                    before and after the "Jingzhe" period is due to the increasing
                                    humidity of the earth that cause the rise of hot air near the ground.
                                </p>
                                <p>
                                <h4> Health Preservation </h4>
                                    
                                    During the season of "Jingzhe", the Qi of the liver and Yang of
                                    human body rises gradually and the Yin and the blood are relatively
                                    in decline. It is important to allow the Yang to rise while supporting
                                    the Yin and promoting the blood. 
                                </p>
                                <p>
                                    Due to the corresponding relationship between liver and spring time, 
                                    this organ can be weakedn if not properly maintained. From a dietary 
                                    perspective in the season of "Jingzhe", one should harmonize with 
                                    nature by nourishing the liver, splene, and other visceral
                                </p>
                                


                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Home2;