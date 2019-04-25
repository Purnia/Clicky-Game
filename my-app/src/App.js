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
    images,
    score: 0,
    topScore:0
  };

  componentDidMount() {
    this.shuffle(images);
    this.setState({score: 0})
  }

 shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
 }

 handleCardClick = id => {
  let selectedIndex = this.state.images.findIndex(image => image.id === id);

  if(this.state.images[selectedIndex].clicked){
    alert("Game Over!");
    this.shuffle();
    this.setState({score: 0})

  }else {
    let currentScore = this.state.score +1;
    if(currentScore > this.state.topScore) {
      this.setState({topScore: currentScore})
    }
    this.shuffle();
    this.state.images[selectedIndex].clicked = true
    this.setState({score: currentScore})

  }

  if(this.state.score === 12) {
    alert("You Win!")
  }

  }

  // Map over this.state.images and render an ImageCard component for each image object
render() {
  return (
    <div>
    <Navbar 
    score={this.state.score}
    topScore={this.state.topScore}
    />
    <Container>
      <Row>
        <Col size="md-12">
        <div className="jumbotron">
        <h1> Clicky Game!</h1>
        <p>Click on an image to get started, but don't click on an image more than once!</p>
        </div>
        </Col>
      </Row>
      
        <Row>
        {this.state.images.map(image =>
        <Col size="md-3" align="center">
  
            <ImageCard
            id={image.id}
            key={image.key}
             card= {`${image.card}`} 
             handleCardClick={this.handleCardClick} 
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



//create an on load function that shuffles. 
//on click listener will be in the cards
//click handler will 