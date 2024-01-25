// import logo from './logo.svg';
// import './App.css';
//import Classcomp from './components/classcomponents/testcomponent';
// import Propscomponent from './components/functionalcomponents/propscomponent';
// import Statecomponent from './components/classcomponents/Statecomponents';
import Navbar from './components/functionalcomponents/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/functionalcomponents/Home';
import About from './components/functionalcomponents/About';
import Contact from './components/functionalcomponents/Contact';
import Login from './components/functionalcomponents/Login';
import Footer from './components/functionalcomponents/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
      {/* <Classcomp/> */}
      {/* <header className="App-header"> */}
        {/* <Statecomponent/> */}
      {/* <Propscomponent name="React" site="React website"/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App
