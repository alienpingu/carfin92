import React, {Component} from 'react'
import {Carousel, Container, Row, Col, Button} from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
   
    super(props);
    this.state = {};
  }

    
    render() {
      return (
	    <>
      {/*Carosello*/}
	      <Carosello />
        <div className="carousel-title">
          <h3>GRUPPO CARMIATI - CARFIN 92</h3>
          <h1>50 anni di Real Estate <br/> a Milano</h1>
        </div>
      {/*About*/}
      <Container className="my-4">
        <p className="h2 bolder text-center p-3">Carfin 92 investe in grandi progetti finalizzati alla creazione di valori sostenibili
e stabili nel tempo.</p>
        <Row className="mt-4">
          <h6 className="label-text">CARFIN92</h6>
          <h4 className="elegant-text">Esperienza, conoscenza, professionalità, affidabilità e rispetto.
Sono le fondamentali “regole” che vengono messe in pratica ogni giorno.</h4>
        </Row>
        <Row className="mt-5">
          <Col md={5} className="mt-5">
            <p className="py-2">Da oltre 50 anni l’attività immobiliare di Carfin 92 è espressione di valori architettonici distintivi, qualità senza compromessi e rispetto del territorio, della sua storia e del suo futuro.</p>
            <p className="py-2">Ogni progetto di sviluppo è originale e immediatamente identificabile grazie alla combinazione di pragmatica visione e competenza, avanguardia tecnologica e passione, capacità progettuale e cura del particolare.</p>
            <img className="img-w100" src="https://picsum.photos/seed/asdrfefg/720/1080" alt="immagine" />
            <div>
              
            </div>
            <div className="d-grid gap-2">
              <Button className="my-2 rounded-0" size="lg" variant="primary">Approfondisci</Button>
            </div>
          </Col>
          <Col md={7} className="mt-5">
            <img className="img-w100" src="https://picsum.photos/seed/mw92ng/720/1080" alt="immagine" />
          </Col>
        </Row>
      </Container>
      {/*Vision*/}

	    </>
        
      )
    }
  }


  export default Home

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
        interval={2500}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/akjsndla/1080/720"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/lafdlef/1080/720"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/oa93fsfv/1080/720"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        
      )
    }
  }