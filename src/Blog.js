import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

class BlogPostDisplay extends Component {
  render() {
    const postMap = this.props.posts.map((post) => {
      return (
        <div>
          <div>{post.author}</div>
          <div>{post.content}</div>
          <div>{post.date}</div>
        </div>
      )
    })
    return(
      <div>{postMap}</div>
    );
  }
}

class BlogForm extends Component {
  state = {author: '', content:'', posts: []};
  
  handleSumbit = event => {
    event.preventDefault();
    const data = {
      author: this.state.author, 
      content: this.state.content
    }
    axios.post('http://localhost:8080/blog', data)
    .then((res) => this.setState({author: '', content:''}))
  }
  
  componentDidMount() {
    axios.get('http://localhost:8080/blog')
    .then((res) => {
      this.setState({posts: res.data});
    })
  }
  
  render() {
    return (
      <Form success onSubmit={this.handleSumbit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-author'
            control={Input}
            label='Author'
            placeholder='Author'
            value={this.state.author}
            onChange={e => this.setState({author:e.target.value})}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-textarea-control-content'
            control={TextArea}
            label='Content'
            placeholder='Content'
            value={this.state.content}
            onChange={ e => this.setState({content:e.target.value})}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            size='large'
          />
        </Form.Group>
        <Message success header='Congratulations!' content="Your post will be reviewed and posted" />
      </Form>
      <BlogPostDisplay post={this.state.posts} />
    )
  }
}



export default BlogForm