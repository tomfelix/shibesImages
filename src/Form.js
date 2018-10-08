import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      pets: 'shibes'
    };
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePetsChange = this.handlePetsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuantityChange = (e) => {
    this.setState({
      quantity: e.target.value
    });
  }

  handlePetsChange = (e) => {
    this.setState({
      pets: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.quantity, this.state.pets);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input onChange={(e) => this.handleQuantityChange(e)} defaultValue="1" type="number" name="quantity" min="1" max="10" required/>
      <select onChange={(e) => this.handlePetsChange(e)} defaultValue="shibes" name="pets" required>
        <option value="shibes">Shibes</option>
        <option value="cats">Cats</option>
        <option value="birds">Birds</option>
        <option value="random">Random</option>
      </select>
        <input type="submit" disabled={this.props.isLoading ? true : false} value={this.props.isLoading ? 'Ładowanie danych' : 'Szukaj'} />
      </form>
    );
  }
}

export default Form;
