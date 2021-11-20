import React from 'react';
import Fengshui1 from '../Assets/fengshui1.jpeg'
import Fengshui2 from '../Assets/fengshui2.jpeg'

const Taoistfengshui = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <img className="fengshui" src={Fengshui1} alt="Feng Shui 1"></img>
                <img className="fengshui2" src={Fengshui2} alt="Feng Shui 2"></img>
                </div>
                <div className="col-sm">
                <h1>Taoism Feng Shui</h1>
                <p>
                Today, the ancient art of Feng Shui is recognized the world over. 
                However, to unleash the full transformational power of Feng Shui, 
                it must be approached from a deeper, personalized level. Daoist Feng Shui 
                has been developed over thousands of years as a method of self-awareness and 
                coexistence with nature. To truly change our lives, our unique rhythms of birth date, 
                time and season must first be determined and calculated. By harmonizing our individual 
                human experience with the energies that surround us, we can gain insight into our world 
                and live more successful lives. Only then, can one merge oneself with the larger patterns 
                of Heaven and Earth.
                </p>
                </div>
            </div>
        </div>
        
            
            

    )
}


export default Taoistfengshui;