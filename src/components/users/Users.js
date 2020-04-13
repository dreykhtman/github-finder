/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import UserItem from './UserItem';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
