
import React from 'react';
import map from '../Assets/map.png'


const Footer = (props) => {


    return (

            <div id="contactus"
                className='p-5 bg-image'
                style={{ backgroundImage: "url('https://www.teahub.io/photos/full/21-214964_green-bamboo-leaves-background.jpg')", height: 450}}
            >
                <div class="row">
                    <div class="col-sm">
                        <div>
                        <h3>Our Location</h3>
                        <p>
                        <a href="/https://www.google.com/maps/place/Beijing+Chinese+Medical+Center/@34.0140936,-118.4824968,17z/data=!4m12!1m6!3m5!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!2sBeijing+Chinese+Medical+Center!8m2!3d34.0141325!4d-118.4802486!3m4!1s0x80c2a4d11cf1afa1:0x9bbd06158b141cb2!8m2!3d34.0141325!4d-118.4802486" class="link-dark" target= "_blank">
                        1930 11th St, Santa Monica, CA 90404
                        </a>
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.1605673505055!2d-118.48249148492941!3d34.014089180616395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d11cf1afa1%3A0x9bbd06158b141cb2!2sBeijing%20Chinese%20Medical%20Center!5e0!3m2!1sen!2sus!4v1633032296730!5m2!1sen!2sus" width="400" height="250" allowfullscreen="" loading="lazy">

                        </iframe>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div>
                        <h4>Contact Information</h4>
                        <p>
                            <a href="tel:310458-1488">(310) 458-1788
                            </a>
                        </p>
                        <p><a href="mailto:baolinwu.medicalcenter@gmail.com">baolinwu.medicalcenter@gmail.com</a></p>
                        <h4>Office Hours</h4>
                        <p class="hours"> 
                            Monday, Tuesday, Wednesday, Friday: 1 pm – 5 pm
                        </p>
                        <p>
                            Thursday, Sunday: Closed
                        </p>
                        <p>
                            Saturday: 10am - 3pm
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
            
    )
}


export default Footer;