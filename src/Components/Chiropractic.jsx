import React from 'react';
import Eric from '../Assets/eric.jpeg'

const Chiropractic = (props) => {
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>Chiropractic Care</h1>
                        <p>
                        Chiropractic is a hands on approach of manipulating areas of 
                        the spinal and limb joints. These joint corrections, also known 
                        as “adjustments”, can restore spinal alignments, improve joint 
                        mobility and provide greater functional ranges of motion. 
                        Our Doctor will provide conservative rehabilitation and 
                        treatment for Neuromuscular and skeletal injuries, 
                        pain management, and preventative wellness care.
                        While the actual adjustments will take mere seconds to perform, 
                        a typical treatment will take about 20 minutes. 
                        The doctor will take your whole body into account and formulate a 
                        treatment plan that is tailored to your specific needs.
                        </p>
                    <h3>What we Treat</h3>
                    <p>
                        <ul>
                            <li>Neck Pain</li>
                            <li>Shoulder Pain</li>
                            <li>Back Pain</li>
                            <li>Knee Pain</li>
                            <li>Joint Pain</li>
                            <li>Sciatica</li>
                            <li>Sport Injuries</li>
                            <li>Car Accidents</li>
                        </ul>
                    </p>
                    <h3>Clinic Services</h3>
                    <ul>
                        <li>Diversified Spinal Adjustment</li>
                        <li>Extremities Adjustments</li>
                        <li>Soft Tissue Muscle Therapy</li>
                        <li>Physiotherapy</li>
                        <li>Trauma/ Injury Rehabilitation</li>
                        <li>Muscular conditioning Therapy</li>
                        <li>Electric Stimulation / TENS</li>
                        <li>Ultrasound Therapy</li>
                        <li>Laser Therapy</li>
                        <li>Taping</li>
                    </ul>
                </div>
                <div className="col-sm">
                <img src={Eric} alt="eric"></img>
                </div>
            </div>
        </div>
            
            
        </div>
    )
}


export default Chiropractic;