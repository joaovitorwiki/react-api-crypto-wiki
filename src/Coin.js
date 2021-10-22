import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange1h,
  priceChange24h,
  priceChange7d
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>

        <p className='coin-price'>R${price.toLocaleString()}</p>

          {priceChange1h < 0 ? (
            <p className='coin-percent red'>{priceChange1h.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange1h.toFixed(2)}%</p>
          )}

          {priceChange24h < 0 ? (
            <p className='coin-percent red'>{priceChange24h.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange24h.toFixed(2)}%</p>
          )}


          {priceChange7d < 0 ? (
            <p  className='coin-percent red'>{priceChange7d.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange7d.toFixed(2)}%</p>
          )}
                          &nbsp;
          <p className='coin-volume'>R${volume.toLocaleString()}</p>
          <p className='coin-marketcap'>
            Mkt Cap: R${marketcap.toLocaleString()}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Coin;
