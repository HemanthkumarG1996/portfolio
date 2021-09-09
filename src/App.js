import './App.css';
import "../src/components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header'

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
    params={{
      Particles:{ 
        Number: {
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
