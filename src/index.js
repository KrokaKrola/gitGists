import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const gists = [
  {
    id: 'aa5a315d61ae9438b18d',
    name: 'Git gub gist name',
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    files: {
      'hello_world.rb': {
        filename: 'hello_world.rb',
        type: 'application/x-ruby',
        language: 'Ruby',
        raw_url:
          'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
        size: 167
      }
    },
    public: true,
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    owner: {
      login: 'octocat',
      id: 1,
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat'
    }
  },
  {
    id: 'aa5a315d61ae9438b181',
    name: 'Git gub gist name',
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    files: {
      'hello_world.rb': {
        filename: 'hello_world.rb',
        type: 'application/x-ruby',
        language: 'Ruby',
        raw_url:
          'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
        size: 167
      }
    },
    public: true,
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    owner: {
      login: 'octocat',
      id: 1,
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat'
    }
  }
];

ReactDOM.render(<App gists={gists} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
