import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
//import styled from 'styled-components'

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
      <Route exact path="/:moviesId">
      <Movies/>
      </Route>
      <Route exact path="/">
      <Home/>
      </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
 