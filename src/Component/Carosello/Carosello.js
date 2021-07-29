import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'



class Carosello extends Component {
  constructor(props) {
   
    super(props);
    this.state = {};
  }

    
    render() {
      return (
      <Carousel
        controls={false}
        fade={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/akjsndla/480/240"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/lafdlef/480/240"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/oa93fsfv/480/240"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        
      )
    }
  }


  export default Carosello