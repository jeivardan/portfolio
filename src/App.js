import React  from 'react';
import {Row} from 'reactstrap'; 
import Home from './components/Home';
import Nav from './components/Navigation';

function App() {
  return (
        <div class="container-fluid">
          <Row>
            <Nav />
          </Row>
          <div className="d-flex justify-content-center pt-5 pb-5 mt-5" id="home">
            <Home></Home>
          </div>
        </div>
  );
}

export default App;
