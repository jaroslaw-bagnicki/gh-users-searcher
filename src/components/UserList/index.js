import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export class  UserList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalUsers: PropTypes.number.isRequired
  }

  render() {
    const { users, totalUsers } = this.props;
    return (
      <div>
        <p>Found {totalUsers} users</p>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
