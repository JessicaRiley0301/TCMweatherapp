import React from 'react';
import Qigongbook from '../Assets/qigongbook.jpg'
import Qigongjourney from '../Assets/qigongjourney.jpg'
import Souloftaiji from '../Assets/souloftaiji.jpg'
import Immortalsword from '../Assets/immortalsword.jpg'
import Lightingeyedragon from '../Assets/lightingeyedragon.jpg'

const Store = (props) => {
    return (
        <div className="container">

                <h1 className="books">Books published by Dr.Wu</h1>


            <div className="row">
                <div className="col-sm">
                <img className="qigongbook" src={Qigongbook} alt="qigongbook"></img>
                <a class="nav-link" href="/store/qigong">Learn More</a>
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
        </div>
    )
}


export default Store;