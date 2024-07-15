import Header from './components/header/Header';
import SideBar from './components/sidebar/Sidebar';
import Map from './components/mapzone/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Map />
    </div>
  );
}

export default App;
