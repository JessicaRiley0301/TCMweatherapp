import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';



const NavigationBar = (props) => {


    return (
        <>
            

            <nav class="navbar sticky-top navbar-expand-lg navbar-default navbar-light">
            <a class="navbar-brand" href="/">Beijing Chinese Medical Center</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <i class="fa fa-caret-down"></i>
            </button>



            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav navbar-center">
            <li class="nav-item active">
                    <a class="nav-link" href="/home2">HOME</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/newpatients">NEW PATIENT</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/acupuncture">ACUPUNCTURE</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/herbs">HERBS</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/chiropractic">CHIROPRACTIC</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/acumassage">ACUMASSAGE</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/chigong">CHIGONG</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/taoistfengshui">FENG SHUI</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/meet">PRACTITIONERS</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/classes">CLASSES</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/store">SHOP</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/blog">BLOG</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#contactus">CONTACT</a>
                </li>
                </ul>
            </div>

            </nav>
            <div
                className="Header"
                style={{ backgroundImage: "url('https://www.teahub.io/photos/full/21-214964_green-bamboo-leaves-background.jpg')", height: 250}}
            >
                
                    <div className='d-flex justify-content-center align-content-center h-100'>
                        <div className='Bigtext'>
                            <h1 className='mb-3'><b>Beijing Chinese Medical Center</b></h1>
                            <h2 className='mb-3'><b>Dr. Baolin Wu, OMD., L.Ac</b></h2>
                            <h6 className='mb-3'><b>Website by Jessica Riley</b></h6>
                        </div>
                    </div>
            
            </div>
        </>
    )
}

export default NavigationBar;

                // <h1>Beijing Medical Center</h1>
                // <Link to={`/`}>Welcome</Link>
                // <Link to={`/meet`}>Meet Us</Link>
                // <Link to={`/newpatients`}>New Patients</Link>
                // <Link to={`/store`}>Store</Link>
                // <Link to={`/contactus`}>Contact Us</Link>
                // <div>
                // <Link to={`/acupuncture`}>Acupuncture</Link>
                // <Link to={`/herbs`}>Herbs</Link>
                // <Link to={`/acumassage`}>AcuMassage</Link>
                // <Link to={`/chiropractic`}>Chiropractic</Link>
                // <Link to={`/chigong`}>Chigong</Link>
                // <Link to={`/taoistfengshui`}>Taoist Feng Shui</Link>
                // <Link to={`/blog`}>Blog</Link>



