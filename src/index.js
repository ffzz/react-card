import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import image from './card.png'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card img={image} title="Editor's Picks" subTitle="Gifts for Him" desc="For Valentine's Day" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
