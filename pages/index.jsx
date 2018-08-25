import 'isomorphic-fetch';
import React from 'react';
import { config } from './config';
import { User } from './user';
import Cards from './card';
import ListCards from './listCard';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      listProduct: [],
      startPage: 0,
      endPage: 10
    }
  }
  async componentWillMount() {
    let res = await fetch('https://aerolab-challenge.now.sh/products', {
      method: 'GET',
      headers: {
        "Authorization": config.token
      }
    });
    let data = await res.json();
    this.setState({ listProduct: data })
  }
  nextPage = () => {
    let topList = this.state.listProduct.length;
    if ((this.state.endPage - topList) < 0) {
      this.setState({ startPage: this.state.startPage + 10 });
    }

  }
  previousPage = () => {
    if ((this.state.startPage) > 0) {
      this.setState({ startPage: this.state.startPage - 10 });
    }

  }

  render() {
    return <div>
      <User></User>
      <ListCards listado={[...this.state.listProduct].splice(this.state.startPage, 10)}></ListCards>
      <button onClick={this.previousPage}>Back</button>
      <button onClick={this.nextPage}>Next</button>
      <div></div>
    </div>
  }
}

// idcono {
//   height: 5px;
//   width: 5px;
//   border-top: 4px solid;
//   border-left: 4px solid;
//   transform: rotate(132deg);
// }