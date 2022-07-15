import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { useState } from 'react';
import LoadingBar  from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [country,setCountry] = useState("in");
  const [progress,setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const toggleMode = () => {
    if (mode === "light") {
      console.log("dark");
      setMode("dark");
      document.body.style.backgroundColor = "#031432";
    } else {
      setMode("light");
      console.log("light");
      document.body.style.backgroundColor = "white";
    }
  };
const changeCountry = (countryCode) =>{

  console.log(countryCode);
  setCountry(countryCode);
}
  return (
    <>
    <LoadingBar color={'blue'} progress={progress} onLoaderFinished={() => setProgress(0)} />
  <Router>
      <NavBar country={country} changeCountry={changeCountry} mode={mode} changeMode={toggleMode}/>
      <Routes>
          <Route path="/" element ={<News apiKey={apiKey} country={country} key={country.concat("_general")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"general"} />} />
          <Route path="/business" element ={<News apiKey={apiKey} country={country} key={country.concat("_business")} changProg ={setProgress}  pageSize={6} mode={mode} category ={"business"} />}/>
          <Route path="/entertainment" element = {<News apiKey={apiKey} country={country} key={country.concat("_entertainment")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"entertainment"} />}/>
          <Route path="/health"  element ={<News apiKey={apiKey} country={country} key={country.concat("_health")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"health"} />}/>
          <Route path="/science" element ={<News apiKey={apiKey} country={country} key={country.concat("_science")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"science"} />}/>
          <Route path="/sports"  element ={<News apiKey={apiKey} country={country} key={country.concat("_sports")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"sports"} />} />
          <Route path="/technology"  element ={<News apiKey={apiKey} country={country} key={country.concat("_technology")}  changProg ={setProgress} pageSize={6} mode={mode} category ={"technology"} />} />
        </Routes>
  </Router>
     
    </>
  );
}

export default App;
