import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
'https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d' )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <div className="coin-contener">
          <a className='main-logo center mb-1 mb-sm-0'>
            <img src="https://i.imgur.com/4UB9Cun.png" alt="logo-coin" className="coin-logo" />
            <h2 className="coin-title">ウィキコイン</h2>
          </a>
        </div>
        <h2 className="coin-intro">Cryptocurrency Price Tracker</h2>
      </div>
      
      <div className="coin-specification">
        <thead>
          <tr>
            <th className='coin-name text-left' role='columnheader'>Moeda</th>
            <th className='th-input'>
            <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Procurar uma Moeda'
          />
          </th>
            <th className='price text-left' role='columnheader'>Preço</th>
            <th className='change1h text-left' role='columnheader'>1 h</th>
            <th className='change24h text-left' role='columnheader'>24 h</th>
            <th className='change7d text-left' role='columnheader'>7 d</th>
            <th className='total-volume text-left' role='columnheader'>Volume Total</th>
            <th className='mkt-cap text-left' role='columnheader'>Capitalização de Mercado</th>
          </tr>
        </thead>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange1h={coin.price_change_percentage_1h_in_currency}
            priceChange24h={coin.price_change_percentage_24h_in_currency}
            priceChange7d={coin.price_change_percentage_7d_in_currency}
            volume={coin.total_volume}
            marketcap={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
