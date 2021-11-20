import React from 'react';

const Home = (props) => {
    
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
            <div className="row">
                <div>
                    <h1 className="Title">Weather Forecast</h1>
                    <div className="row">
                        <div className="col-sm">
                        <h2 className="Head"> Current </h2>
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr>
                                    <td> Weather </td>
                                    <td> icon description </td>
                                </tr>
                                <tr>
                                    <td>Temperature</td>
                                    <td>80° F</td>
                                </tr>
                                <tr>
                                    <td>Clouds</td>
                                    <td>0</td>
                                </tr>
                                <tr>
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
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-sm">
                        <h2 className="Head"> Today </h2>
                        <table class="table table-sm table-striped">
                            
                            <tbody>
                                <tr>
                                    <td>Today's Average Temp</td>
                                    <td>75° F </td>
                                </tr>
                                <tr>
                                    <td>Today's High/Low Temp</td>
                                    <td>87° F, 50° F</td>
                                </tr>
                                <tr>
                                    <td>Sunrise</td>
                                    <td>6:45am</td>
                                </tr>
                                <tr>
                                    <td>Sunset</td>
                                    <td>7:00pm</td>
                                </tr>
                                <tr>
                                    <td>Moonrise</td>
                                    <td>9:00pm</td>
                                </tr>
                                <tr>
                                    <td>Moonset</td>
                                    <td>5:00am</td>
                                </tr>
                                <tr>
                                    <td>Moon Phase</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col-sm">
                        <h2 className="Head"> This Week </h2>
                        <table class="table table-sm table-striped">
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>87° F, 50° F</td>
                                    <td>🌤</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>87° F, 50° F</td>
                                    <td>☀️</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>87° F, 50° F</td>
                                    <td>⛈</td>
                                </tr>
                                <tr>
                                    <td>Thurday</td>
                                    <td>87° F, 50° F</td>
                                    <td>🌧</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>87° F, 50° F</td>
                                    <td>☀️</td>
                                </tr>

                                <tr>
                                    <td>Saturday</td>
                                    <td>87° F, 50° F</td>
                                    <td>☁️</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>87° F, 50° F</td>
                                    <td>☀️</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
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


export default Home;