import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
