import React from 'react';

const NewPatient = (props) => {
    return (

        <div class="container">
            <div className="row">
                <div className="col-sm">
                <img src="https://beijingchinesemedicalcenter.com/wp-content/uploads/2017/04/acupuncture-bigger.jpg" alt="drwu" height="400" />
                </div>
                <div className="col-sm">
                <h1 class="newpatients"> New Patient </h1>
                    <h4> Covid </h4>
                        <p> please wear a mask etc.</p>
                    <h4>What to Expect</h4>
                        <p>
                        description of what to expect
                        </p>
                    <h4>Risks of Acupuncture</h4>
                        <p> description of risks of Acupuncture</p>
                    <h4>After Acupuncture Treatment</h4>
                        <p>description of after treatment</p>
                    <h4>Cash Rate</h4>
                    <p>We accept insurance</p>
                    <p>Cash Rate</p>
                    <ul>
                        <li>First Appointment:</li>
                        <li>Follow up Appointment:</li>
                        <li>Other Services:</li>
                        <li>Other Services...</li>
                    </ul>
                    <h4> Please fill out this form before your Appointment</h4>
                    <p>Attached Form</p>
                </div>
                
            </div>
            
            
            
        </div>
    )
}


export default NewPatient;