import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  };
  
  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return <div>Signin Status Unknown</div>
    } else if(this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Not Signed in</div>
    }
  }
  
  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;