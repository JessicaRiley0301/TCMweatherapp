import React from 'react';
import Massage from '../Assets/massage.jpeg'

const AcuMassage = (props) => {
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <img src={Massage} alt="massage"></img>
                </div>
                <div className="col-sm">
                    <h1>Massage</h1>
                    <h4>Acupressure</h4>
                    <p>Very similar to acupuncture, this technique 
                        uses digital pressure rather than needle 
                        insertion to rebalance the body in accordance to 
                        TCM ACU-channels and meridians.
                    </p>
                    <h4>Tui Na</h4>
                    <p>
                    Is a hands on body technique, in which the practitioner
                    may brush, knead, press, roll and rub on areas of the 
                    body.
                    </p>
                    <h4>Gua Sha</h4>
                    <p>
                    Is a TCM therapy in which the skin is scraped to produce 
                    light bruising. It is used to promote blood flow and healing.
                    </p>

                </div>
            </div>
        </div>
            
            
        </div>
    )
}


export default AcuMassage;