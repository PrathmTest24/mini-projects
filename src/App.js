import logo from './logo.svg';
import './App.css';
import Random from './components/random-color/random';
import LigthDark from './components/light-dark-mode/LigthDark';
import { Qr } from './components/QR-code/qr';
import { GItProfile } from './components/git-hub-profile/GItProfile';
function App() {
  return (
    <>
     
      {/* Random color Genarate      */}
      {/* <Random/> */}

      {/* Light - dark - mode  */}
       {/* <LigthDark/> */}

       {/* QR-code Genarateor */}
       {/* <Qr/> */}

       {/* github Profile finder */}
       <GItProfile/>
    </>
    
  );
}

export default App;
