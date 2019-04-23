import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Container from "./components/Container";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Col from "./components/Col";
import Row from "./components/Row";


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

// Map over this.state.images and render an ImageCard component for each image object
render() {
  return (
    <div>
    <Navbar />
    <Container>
      <Row>
        <Col size="sm-12">
        <h1> Click to Get Started!</h1>
        </Col>
        </Row>
        <Row>
        {this.state.images.map(image =>
        <Col size="md-3">
  
            <ImageCard
             card= {`${image.card}`}
            />
            </Col>
         )}
         
      
    </Row>
    
    </Container>

    </div>
  );
}

}



export default App;
