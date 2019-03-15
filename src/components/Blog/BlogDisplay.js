import React, { Component } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';

class BlogPostDisplay extends Component {
  state = {posts: []};
  
  componentDidMount() {
    axios.get('http://localhost:8080/blog')
    .then((res) => {
      this.setState({posts: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }; 
  
  render() {
    const postMap = this.state.posts.map(({_id, author, content, date}) => {
      return (
        <div key={_id}>
          <div>{author}</div>
          <div>{content}</div>
          <div>{date}</div>
        </div>
      )
    })
    return(
      <div>
        <BlogForm />
        <div>{postMap}</div>
      </div>
    );
  }
}

export default BlogPostDisplay;