import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <>
    <NavBar />
    <div className="flex flex-row">
    <NewsItem />
    <NewsItem />
    <NewsItem />
    </div>
    </>
  );
}

export default App;
