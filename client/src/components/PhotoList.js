import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import db from '../firebase/firebase';


class PhotoList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var photoArray = [];
        if (this.props.filter === '') {
            db.collection("photos").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var url = doc.get('url');
                    photoArray.push(url);
                    this.setState({photos: photoArray});
                });
            });
        } else {
            db.collection("photos").where("tags", "array-contains", this.props.filter).get().then((
                (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        var url = doc.get('url');
                        photoArray.pusjh(url);
                        this.setState({photos: photoArray});
                    })
                })
            )
        }
    }
    render() {
        if (this.state && this.state.photos) {
        var photoCollection = [];
        for (var index in this.state.photos) {
            var newImage = <Image src={this.state.photos[index]} className='photo-item'/>
            photoCollection.push(newImage);
        }
    }
        return (
            <Container>
                {photoCollection}
            </Container>
        );
    }
}

export default PhotoList;