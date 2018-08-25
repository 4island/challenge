import 'isomorphic-fetch';
import React from 'react';
import { config } from './config';


export class User extends React.Component {
  constructor() {
    super();
    this.state = {
      dataUser: {}
    }
  }
  async componentWillMount() {
    let res = await fetch('https://aerolab-challenge.now.sh/user/me', {
      method: 'GET',
      headers: {
        "Authorization": config.token
      }
    });
    let data = await res.json();
    this.setState({ dataUser: data })
  }

  render() {
    return <div>
      <h2>Usuario:{this.state.dataUser.name}</h2>
      <h2>Ptos:{this.state.dataUser.points}</h2>
    </div>
  }

}