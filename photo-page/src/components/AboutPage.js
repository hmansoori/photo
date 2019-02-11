import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class AboutPage extends Component {

  render() {
    return (
      <Container>
            <h1 className='page-title'>Meet Hannah</h1>
            <Row>
              <Col>
              <Image className='about-photo' src='https://firebasestorage.googleapis.com/v0/b/photo-page-8770a.appspot.com/o/img%2FIMG_5982.jpg?alt=media&token=83a7f32e-6964-426c-91de-bf4e9a82f855' />
              </Col>
              <Col>
              <p className='about-text'>Hannah Mansoori is a professional software developer and photographer currently living in Seattle, Washington.
                She graduated from the University of Washington in 2018 with a degree in Informatics. In her spare time, 
                she enjoys tapping into her creative side; whether that's through coding, painting, drawing, making music, or
                photography. You're likely to find her exploring the city, drinking coffee, and hiking through the great outdoors.
                Feel free to say hi!
              </p>
              </Col>
            </Row>
      </Container>
    );
  }
}
  


export default AboutPage;
