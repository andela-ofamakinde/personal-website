import React from 'react'
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react'

class MessageForm extends React.Component {
  state = {firstName:'', lastName: '', email:'', message:''};
  
  handleSumbit = event => {
    event.preventDefault();
    const data = {
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      email: this.state.email, 
      message: this.state.message
    };
    this.props.onSubmit(data)
  };
  
  render() {
    return (
      <Form success onSubmit={this.handleSumbit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder='First name'
            value={this.state.firstName}
            onChange={e => this.setState({firstName:e.target.value})}
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Email'
            placeholder='Lastname'
            value={this.state.lastName}
            onChange={e => this.setState({lastName:e.target.value})}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            placeholder='Email'
            value={this.state.email}
            onChange={e => this.setState({email:e.target.value})}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          placeholder='Message'
          value={this.state.message}
          onChange={ e => this.setState({message:e.target.value})}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Send'
          size='large'
        />
        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
      </Form>
    )
  }
}

export default MessageForm