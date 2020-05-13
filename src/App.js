//I leaned extensively on this tutorial: https://dev.to/abdulbasit313/building-a-scalable-random-quote-app-in-react-461e
//but I messed around with it a lot to understand it better.
//Therefore, this code does not really belong to me 

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios.get(url)
      .then(res => {
        let data = res.data.quotes
        let randomQuote = data[Math.floor(Math.random() * data.length)]

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
  }

  getNewQuote = () => {
    this.getQuote()
  }

  render() {
    const { quote, author } = this.state
    return (
      <div id='wrapper'>
        <h1 className='title'>Random Quote Generator</h1>

        <div id='quote-box'>
          <div id='text'><p>{quote}</p></div>
          <div id='author'><h5>{author}</h5></div>

          <div id='buttons'>
            <button id='new-quote' className='button' onClick={this.getNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App