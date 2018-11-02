import React, { Component } from 'react';
import $ from 'jquery';

class Users extends Component {
  render(){
    const usersList = () => {
      return $.ajax({
        url: `https://front-test.now.sh/users?token=18476dc1c4fb11f4eebd2c4aaacdb3c14b3cd1e945dd8bc8456b73c8d4ef33cf`,
        method: 'GET',
        format: 'json'
      });
    };

    const promiseUsersList = usersList();

    promiseUsersList.fail((err) => {
      console.log(err);
    });
    promiseUsersList.done((res) => {
      representData(res.data);
    });

    const representData = (usersList) => {
      console.log(usersList);
    }

    return(
      <div>
        <h1 id="ddd">Well it is a users component</h1>
      </div>
    );
  }
}

export default Users;