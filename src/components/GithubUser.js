import React, { Component } from 'react';

const fetchConfig = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};

class GithubUser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.fetch(`https://api.github.com/users/${this.props.slug}`, fetchConfig).then(
      (response) => {
        if(response.ok) {
          response.json().then((json) => {
            this.setState(json);
          });
        } else {
          console.log("Ajax response was not okay");
        }
      }
    ).catch((error) => {
      console.log("Ajax error:", error);
    });
  }

  render() {
    return(
      <h1>
        {this.state.name}
      </h1>
    );
  }
}

export default GithubUser;
