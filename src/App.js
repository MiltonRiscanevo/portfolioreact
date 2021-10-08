import React,{ lazy,Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from 'react-router-dom'
import Loader from './components/loader';
import IndexNav from './components/navbar/IndexNav';

const Banner= lazy(()=>import(
  './components/Banner'
))

const Presentation= lazy(()=>import(
  './components/Presentation'
))

const Team= lazy(()=>import(
  './components/team'
))




function App() {

  return (
    <Router>
      <div className="container">
          <IndexNav/>
          <Switch>
            <Route path="/banner">
              <Suspense fallback={<Loader/>}>
                <Banner/>
              </Suspense>
            </Route>
            <Route path="/team">
              <Suspense fallback={<Loader/>}>
                <Team/>
              </Suspense>  
            </Route>
            <Route path="/">
              <Suspense fallback={<Loader/>}>
                <Presentation/>
              </Suspense>
            </Route>
          </Switch>
          
      </div>
    </Router>
    
  );
  
}

export default App;
