import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Navbar from "./components/Navbar";


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
    <Wrapper>
      {this.state.images.map(image => ( 
         <ImageCard
          card={image.card}
         />
      ))}
    </Wrapper>

    </div>
  );
}

}



export default App;
