import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      subject: '',
      message: ''
    };
  }

  // Function that handles email sending upon hitting submission button
  // sends ajax request to express
  handleSubmit(e) {
    e.preventDefault();
    var messageData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }

    axios({
        method: 'POST',
        url:'http://localhost:5000/send',
        data: messageData
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  render() {
    return (
      <Container id='contact-form'>
        <h1 className='page-title'>Let's keep in touch</h1>
        <Row>
          <Col>
            <Image className='contact-photo' src='https://firebasestorage.googleapis.com/v0/b/photo-page-8770a.appspot.com/o/img%2FIMG_6366.jpg?alt=media&token=379c80b4-5513-456a-9ca9-d3fdb4b1fc68' />
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  Who are you?
                  </Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="First name" onChange={event => this.setState(byPropKey('firstName', event.target.value))} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" onChange={event => this.setState(byPropKey('lastName', event.target.value))} />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={event => this.setState(byPropKey('email', event.target.value))} />
                <Form.Text className="text-muted">
                  Your email will not be shared with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupSubject">
                <Form.Label>What do you want to talk about?</Form.Label>
                <Form.Control placeholder="Subject line" onChange={event => this.setState(byPropKey('subject', event.target.value))} />
              </Form.Group>
              <Form.Group controlId="formGroupTextArea">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={event => this.setState(byPropKey('message', event.target.value))} />
              </Form.Group>
            </Form>
            <Button as="input" type="submit" variant="secondary" value="Send" onClick={this.handleSubmit}/>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default ContactPage;
