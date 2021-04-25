import React from 'react'

const Swap = ({ countryOne, setCountryOne, countryTwo, setCountryTwo, rate }) => {
  const swap = () => {
    const temp = countryOne;
    setCountryOne(countryTwo);
    setCountryTwo(temp);
  }
  return (
    <div className="swap-rate-container">
      <button className="btn" id="swap"　onClick={swap}>
        Swap
      </button>
      <div className="rate" id="rate">
        {`1 ${countryOne} = ${rate.toFixed(2)} ${countryTwo}`}
      </div>
    </div>
  )
}

export default Swap
