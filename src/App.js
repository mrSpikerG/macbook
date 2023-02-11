import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const [percent, setPercent] = useState(0);  
  const [transitions, setTransitions] = useState(3);  
  const [screenColor, setScrColor] = useState('#000');  
  const [visibilityScreen, setVisible] = useState('hidden');  
  const [screenClass, setScrClass] = useState('');  
  

  
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const activateMac = async () => {
    
    if(screenClass==='windowsxp'){
      setPercent(0);
      setTransitions(3);
      setScrClass('');
      setScrColor('#000');
      return;
    }

    setScrColor('#2F2F2F');
    setVisible('visible');
    setPercent(100);

    await delay(5000);
    setTransitions(0);
    setVisible('hidden');
    setScrClass('windowsxp');
  };


  return (
    <div className="App">
      <header className="App-header">

          <button className='clickme' onClick={activateMac}>click me</button>
       
          <div style={{ backgroundColor: screenColor}} className={`screen__container ${screenClass}`}>
            <img style={{visibility: visibilityScreen}} class='icon-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png'></img>
            <div style={{visibility: visibilityScreen}} className='screen-progressbar'>
              <div style={{width: `${percent}%`, visibility: visibilityScreen,transitionDuration: `${transitions}s`}} className='screen-progressbar__progress'></div>
            </div>

            
          </div>
       
        
      </header>
    </div>
  );
}

export default App;
