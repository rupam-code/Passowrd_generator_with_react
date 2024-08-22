import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { lc, nc, sc, uc } from './Data/InfoChar';

function App() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [numberCase, setNumberCase] = useState(false);
  let [symbolCase, setSymbolCase] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [fpass, setFpass] = useState('');

  let createPassword = () => {
    let finalPass = '';
    let charSet = '';

    if (upperCase || lowerCase || numberCase || symbolCase) {
      if (upperCase) charSet += uc;
      if (lowerCase) charSet += lc;
      if (numberCase) charSet += nc;
      if (symbolCase) charSet += sc;

      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setFpass(finalPass);
    } else {
      alert('Please select at least one checkbox');
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className='passowordBox'>
        <h2 className='head'>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' readOnly value={fpass} /> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={20} min={8} value={passwordLength} onChange={(event) => setPasswordLength(event.target.value)} />
        </div>

        <div className='passLength'>
          <label>Using UpperCase</label>
          <input type='checkbox' checked={upperCase} onChange={() => setUpperCase(!upperCase)} />
        </div>

        <div className='passLength'>
          <label>Using LowerCase</label>
          <input type='checkbox' checked={lowerCase} onChange={() => setLowerCase(!lowerCase)} />
        </div>

        <div className='passLength'>
          <label>Using Numbers</label>
          <input type='checkbox' checked={numberCase} onChange={() => setNumberCase(!numberCase)} />
        </div>

        <div className='passLength'>
          <label>Using Symbols</label>
          <input type='checkbox' checked={symbolCase} onChange={() => setSymbolCase(!symbolCase)} />
        </div>

        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
