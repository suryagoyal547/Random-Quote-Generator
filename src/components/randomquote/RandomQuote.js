import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../assest/x.svg'
import rotate_icon from '../assest/rotate.svg'

const RandomQuote = () => {

  let quotes = [];

  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();

  }


  const random = ()=>{
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }

  const twitter = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  }

    const [quote, setQuote] = useState(
        {
            text : "people judge too quickly",
            author : "Surya Goyal"
        }
    )

    loadQuotes();
  return (
    <div>

      <div className="container">
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">{quote.author.split(',')[0]}</div>
                <div className="icons">
                    <img width='20px' src={rotate_icon} onClick={()=>{random()}} alt="" />
                    <img  width='20px' src={twitter_icon} onClick={()=>{twitter()}} alt="" />
                </div>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default RandomQuote
