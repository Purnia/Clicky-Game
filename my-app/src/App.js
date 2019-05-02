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
    this.newGame();
  }

  newGame = function(){
    let newArray = this.state.images.map(image => {
      image.clicked = false;
      return image;
    });
    this.setState({score: 0, images:newArray});
    this.shuffle(this.state.images);
  }

 shuffle = function(array) {
  var currentIndex = array.length; 
  var temporaryValue;
  var randomIndex;
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
  let selectedImage = this.state.images.find(image => image.id === id); //.find returns the image when its true (implicit return in arrow function)

  if(selectedImage.clicked){
    alert("Game Over!");
    this.newGame();
    
    

  }else {
    let currentScore = this.state.score +1;
    if(currentScore > this.state.topScore) {
      this.setState({topScore: currentScore})
    }
    if(currentScore ===3) {
      alert("You Win!")
      this.newGame();
    }else{
      this.shuffle(this.state.images);
      selectedImage.clicked = true
      this.setState({score: currentScore})
      
    }
    
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