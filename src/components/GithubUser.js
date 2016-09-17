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
    this.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.fetchUser(nextProps.params.id);
    }
  }

  fetchUser(slug) {
    window.fetch(`https://api.github.com/users/${slug}`, fetchConfig).then(
      (response) => {
        if(response.ok) {
          response.json().then((json) => {
            this.setState(json);
          });
        } else {
          console.error("Ajax response was not okay.", response);
        }
      }
    ).catch((error) => {
      console.error("Ajax error:", error);
    });
  }

  render() {
    return(
      <div className="GithubUser_box">
        <h1 className>{ this.state.name }</h1>
        <img src={ this.state.avatar_url } className="GithubUser_avatar" />
      </div>
    );
  }
}

export default GithubUser;
