import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { Component } from 'react';

import Loading from '../loading/loading';
import Main from '../main/main';
import Teamers from '../teamers/teamers';
import TeamersPerson from '../teamers-person/teamers-person';
import Project from '../project/project';
import About from '../about/about';
import Success from '../success/success';
import Contacts from '../contacts/contacts';

let App = () => {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Loading />} />
            <Route exact path="/main" element={<Main />} />
            <Route exact path="/teamers" element={<Teamers />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/contacts" element={<Contacts />} />
         </Routes>
      </Router>
   );
}

export default App;
