import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ContactPage extends Component {

  render() {
    return (
      <Container>
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
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Your email will not be shared with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupSubject">
                <Form.Label>What do you want to talk about?</Form.Label>
                <Form.Control placeholder="Subject line" />
              </Form.Group>
              <Form.Group controlId="formGroupTextArea">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <Button as="input" type="submit" variant="secondary" value="Send" />
          </Col>
        </Row>

      </Container>
    );
  }
}



export default ContactPage;
