import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Route, Switch, NavLink, Link, useLocation } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Home from './components/Home';
import Info from './components/Guide/guides/ProductInfo/Info';
import Handset from './components/Guide/guides/ProductInfo/Handset';
import Request from './components/Guide/guides/ProductInfo/Request';
import License from './components/Guide/guides/ProductInfo/License';
import SetupWifi from './components/Guide/guides/Functional/SetupWifi';
import FuncNav from './components/Guide/guides/Functional/FuncNav';
import SoftwareUpdates from './components/Guide/guides/Functional/SoftwareUpdates';
import AddGoogleAccount from './components/Guide/guides/Functional/AddGoogleAccount';

import {AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  const links = ['setupWifi','softwareUpdates','addAccount'];
  const routes = ['func-nav','product-info','troubleshooting','req-support'];

  const comp = [SetupWifi,SoftwareUpdates, AddGoogleAccount];
  
  const pageTransition = {
    in: {
      opacity: 1
    },
    out:{
      opacity: 0
    }
  }


  return(

    // <Router>
    <div className="App">
      {/* <Switch location={location} key={location.key} > */}
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname} >
      <Route exact path='/'>
          <Home />
      </Route>
      <Route exact path = '/func-nav'>
        <FuncNav />
      </Route>
      <Route exact path = '/product-info'> 
        <Info />
      </Route>
      <Route exact path = '/product-info/Handset'>
        <Handset />
      </Route>
      <Route exact path = '/product-info/License' component={License} />
      <Route exact path = '/req-support' component={Request} />

      {links.map(function(link,index){
        return (
          <Route exact path = {`/${routes[0]}/${link}`} component ={comp[index]} />
        );
      })
      }
      </Switch>
    </AnimatePresence>
    </div>

    // </Router>


  );


}

export default App;
