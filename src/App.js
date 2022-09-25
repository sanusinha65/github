import React, { Component } from 'react'
import UserDetails from './Components/UsersDetails.jsx';
import ReposDetails from './Components/ReposDetails.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserDetails />
        <ReposDetails />
      </div>
    )
  }
}
