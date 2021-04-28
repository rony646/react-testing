import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {

  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ?  'MidnightBlue' : 'MediumVioletRed';



  return (
    <div className="App">
        <button 
          style={{backgroundColor: buttonDisabled ? 'grey' : buttonColor}} 
          onClick={() => setButtonColor(newButtonColor)}
          disabled={buttonDisabled}
        >
          Change to {replaceCamelWithSpaces(newButtonColor)}
        </button>
        <input 
          type="checkbox"
          id="disable-button-checkbox"
          onChange={() => setButtonDisabled(!buttonDisabled)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
