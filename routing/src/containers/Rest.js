import React from 'react';

class Rest extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json
        })
      })
  }
  render() {
    return (
      <div>
        <h5>{this.state.posts.title}</h5>
        <p>{this.state.posts.body}</p>
      </div>
    );
  }
}

export default Rest;