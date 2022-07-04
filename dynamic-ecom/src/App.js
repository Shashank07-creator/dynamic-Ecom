import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';

function App() {
  function halt() {
    console.clear()
    document.getElementById('load').style.display = 'none'
    document.getElementById('content').style.display = 'block'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
  }
  const [loadCount, setLoadCount] = useState(0)
  function updateLoadCount() {
    setLoadCount(loadCount + 1)
  }
  return (
    <div className="App">
      <div id="load">
        <Loader />
        {loadCount === 1 && halt()}
      </div>
      <div id='content' style={{ display: 'none' }}>
        <Header loaded={updateLoadCount} />
        <div style={{clear:'both'}}></div>
        <HomePage />
        {/* <Routes>
        <Route exact path='/' element = {<HomePage/>}/>
      </Routes>      */}
      </div>
    </div>
  );
}

export default App;