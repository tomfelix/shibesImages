import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Images from './Images';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      pets: 'shibes',
      images: [],
      isLoading: false
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = (quantity, pets) => {
    if (pets === 'random') {
      let randomEndPoint = Math.random();
      if (randomEndPoint < 0.33) {
        pets = 'shibes';
      } else if (randomEndPoint >= 0.33 && randomEndPoint < 0.66) {
        pets = 'cats'
      } else {
        pets = 'birds'
      }
    } else {
      this.setState({
        pets
      })
    }
    this.setState({
      quantity,
      pets,
      isLoading: true
    });
    fetch(corsAnywhere + `http://shibe.online/api/${pets}?count=${quantity}`)
      .then(result => result.json())
      .then(result => this.setState({
        images: result,
        isLoading: false
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form isLoading={this.state.isLoading} onSubmit={this.handleOnSubmit} />
        </header>
        <Images isLoading={this.state.isLoading} images={this.state.images} />
      </div>
    );
  }
}

export default App;
