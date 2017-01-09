import React, { Component, PropTypes } from 'react';

import request from 'request-promise-native';
import verifier from 'google-id-token-verifier';

class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { login } = this.props;
    const { router } = this.context;
    const code = window.localStorage.getItem('oauthCode');

    if (!code) {
      return;
    }

    window.localStorage.removeItem('oauthCode');

    request.post({
      uri: 'https://www.googleapis.com/oauth2/v4/token',
      form: {
        code,
        client_id: this.props.settings.googleClientId,
        client_secret: this.props.settings.googleClientSecret,
        redirect_uri: 'http://localhost:3333/app/oauthCallback.html',
        grant_type: 'authorization_code'
      },
      json: true
    }).then(res => {
      const promise = new Promise((resolve, reject) => {
        verifier.verify(res.id_token, this.props.settings.googleClientId, (err, tokenInfo) => {
          if (!err) {
            resolve({
              user: tokenInfo,
              payload: res
            });
          } else {
            reject();
          }
        });
      });

      return promise;
    }).then(({ user, payload }) => {
      login(user, payload);

      router.push('/');
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div />
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Login;
