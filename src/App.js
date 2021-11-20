
import './App.css';
import React from 'react';
import NavigationBar from './Components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch,Route } from 'react-router-dom';
import Meet from './Components/Meet';
import Chigong from './Components/Chigong';
import NewPatient from './Components/NewPatient';
import Store from './Components/Store';
import ContactUs from './Components/ContactUs';
import Acupuncture from './Components/Acupuncture';
import AcuMassage from './Components/AcuMassage';
import Blog from './Components/Blog';
import Chiropractic from './Components/Chiropractic';
import Herbs from './Components/Herbs';
import Taoistfengshui from './Components/Taoistfengshui';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Classes from './Components/Classes';
import QiGongWellness from './Components/QiGongWellness';

import WeatherOneCall from './Components/WeatherOneCall';
import Home2 from './Components/Home2';



function App() {



  return (
    <div className="App">
        <NavigationBar/>
          <Switch>
              <Route exact path="/" render={() =>(
                <Home/> 
              )}/>
              <Route exact path="/meet" render={() =>(
                <Meet/>
              )}/>
              <Route exact path="/newpatients" render={() =>(
                <NewPatient/>
              )}/>
              <Route exact path="/store" render={() =>(
                <Store/>
              )}/>
              <Route exact path="/store/qigong" render={() =>(
                <QiGongWellness/>
              )}/>
              <Route exact path="/contactus" render={() =>(
                <ContactUs/>
              )}/>
              <Route exact path="/acupuncture" render={() =>(
                <Acupuncture/>
              )}/>
              <Route exact path="/herbs" render={() =>(
                <Herbs/>
              )}/>
              <Route exact path="/acumassage" render={() =>(
                <AcuMassage/>
              )}/>
              <Route exact path="/chiropractic" render={() =>(
                <Chiropractic/>
              )}/>
              <Route exact path="/chigong" render={() =>(
                <Chigong/>
              )}/>
              <Route exact path="/taoistfengshui" render={() =>(
                <Taoistfengshui/>
              )}/>
              <Route exact path="/blog" render={() =>(
                <Blog/>
              )}/>
              <Route exact path="/classes" render={() =>(
                <Classes/>
              )}/>    
              <Route exact path="/weatherone" render={() =>(
                <WeatherOneCall/>
              )}/>
              <Route exact path="/home2" render={() =>(
                <Home2/>
              )}/>                                                                                                                
          </Switch>
        <Footer/>
        
    </div>
  );
}

export default App;
