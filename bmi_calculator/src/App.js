import logo from './logo.svg';
import './App.css';
import AppRouter from './Routes/AppRouter';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
