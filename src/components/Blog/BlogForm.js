import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

class BlogForm extends Component {
  state = {author: '', content:''};
  
  handleSumbit = event => {
    event.preventDefault();
    const data = {
      author: this.state.author, 
      content: this.state.content
    }
    axios.post('http://localhost:8080/blog', data)
    .then(res => {
      this.setState({author: '', content:''})
    })
    .catch(err => {
      console.log(err);
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
    )
  }
}



export default BlogForm