import React from 'react';
import Qigongbook from '../Assets/qigongbook.jpg'
import Qigongjourney from '../Assets/qigongjourney.jpg'
import Souloftaiji from '../Assets/souloftaiji.jpg'
import Immortalsword from '../Assets/immortalsword.jpg'
import Lightingeyedragon from '../Assets/lightingeyedragon.jpg'

const QiGongWellness = (props) => {
    return (
        <div className="container">

                <h1 className="books">Books Published by Dr. Baolin Wu</h1>


            <div className="row">
                <div className="col-sm">
                <div className="book">
                <img className="qigongbook" src={Qigongbook} alt="qigongbook"></img>
                </div>
                <div className="button1">
                <a href="/store/qigong" class="btn btn-primary">Learn More</a>
                </div>
                

                

                </div>
                <div className="col-sm">
                <img className="lightingdragon" src={Lightingeyedragon} alt="Lightingeyedragon"></img>
                </div>
                <div className="col-sm">
                <img className="qigongjourney" src={Qigongjourney} alt="Qigongjourney"></img>
                </div>
                <div className="col-sm">
                <img className="immortalsword" src={Immortalsword} alt="Immortal Sword"></img>
                </div>
                <div className="col-sm">
                <img className="souloftaiji" src={Souloftaiji} alt="Soul of Taiji"></img>
                </div>
            </div>
            <div className="row2">
            <div class="card">
                <div class="card-header">
                    Description
                </div>
            <div class="card-body">
            <h2 class="card-title">
                Qi Gong for Total Wellness:
            </h2>
            <h2 class="card-title">
                Increase Your Energy, 
                    Vitality, and Longevity with the Ancient 9 Palaces System from the White 
                    Cloud Monastery
            </h2>
            <h5 class="card-title">
            By: Dr. Baolin Wu and Jessica Eckstein
            </h5>
            <p class="card-text">
                    Qi Gong for Well-Being is a clear, illustrated guide to Qi Gong, 
                    the ancient self-healing art that combines movement, meditation, 
                    and visualization to boost energy and improve health. Author Baolin Wu 
                    specializes in Nine Palaces Solar Qi Gong which works with the energy 
                    of the sun, and trains practioners to expel toxins and intake healthy qi 
                    through the nine openings--palaces-- of the body.
            </p>
            <p class="card-text">
                This introduction to the concepts of Qi Gong and contains exercises 
                and methods pertaining to each part of the body, with clear instructions 
                how to accurately apply the methods of Solar Qi Gong to increase physical 
                and mental health using this ancient art.
            </p>
            <div className="button">
                <a href="/https://www.amazon.com/Gong-Total-Wellness-Longevity-Monastery/dp/0312262337/ref=sr_1_2?dchild=1&keywords=dr+baolin+wu&qid=1631487653&sr=8-2" class="btn btn-warning">Buy From Amazon</a>
                </div>
            </div>
            </div>

            
            

            
        </div>
        </div>
    
    )
}


export default QiGongWellness;