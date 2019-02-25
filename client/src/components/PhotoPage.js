import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import PhotoList from './PhotoList';

class PhotoPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    filter: ''
  };

}

  render() {
    return (
      <Container>
        <PhotoList filter={this.state.filter}/>
      </Container>
    );
  }
}
  


export default PhotoPage;