import React, { useState, useEffect } from 'react';
import logo from'./image/money.png';
import CurrencyOne from './components/CurrencyOne';
import CurrencyTwo from './components/CurrencyTwo';
import Swap from './components/Swap';
import axios from 'axios';
import './App.css';

function App() {
  const [countryOne, setCountryOne] = useState('USD');
  const [countryTwo, setCountryTwo] = useState('JPY');
  const [amoutOne, setAmountOne] = useState(1);
  const [amoutTwo, setAmountTwo] = useState(0);
  const [rate, setRate] = useState(0);
  
  useEffect(async ()=> {
    const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${countryOne}`);

    setRate(Number(res.data.rates[countryTwo]));
  }, [countryOne, countryTwo]);

  useEffect(() => {
    setAmountTwo(amoutOne * rate);
  }, [amoutOne, rate]);

  return (
    <>
    <div className="image">
      <img src={logo} alt="" className="money-img"/>
      <img src={logo} alt="" className="money-img"/>
      <img src={logo} alt="" className="money-img"/>
    </div>
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>
      <div className="container">
        <CurrencyOne countryOne={countryOne} setCountryOne={setCountryOne} amoutOne={amoutOne} setAmountOne={setAmountOne}/>
        <Swap countryOne={countryOne} setCountryOne={setCountryOne} countryTwo={countryTwo} setCountryTwo={setCountryTwo} rate={rate}/>
        <CurrencyTwo countryTwo={countryTwo} setCountryTwo={setCountryTwo} amoutTwo={amoutTwo}/>
      </div>
    </>
  );
}

export default App;
