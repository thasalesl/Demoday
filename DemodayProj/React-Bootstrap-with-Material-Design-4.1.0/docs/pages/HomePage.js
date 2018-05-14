import React, { Component } from 'react';

import { Media, Carousel, CarouselCaption, CarouselControl, Card, CardImage, CardTitle, CardText, Button, CarouselInner, CarouselItem, EdgeHeader, FreeBird, Container, NavLink, Col, Row, CardBody, Fa } from 'mdbreact';
// import logoEmp from './img/logoEmprego.png';

// import dois from './dois.jpg';
import './HomePage.css';

class HomePage extends Component {

  constructor(props) {

    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }


  next() {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }


  render() {

    const { activeItem } = this.state;

    return (
      <div>
        {/* <div className="container mt-4"> */}

        <div className="row">
          <div className="col-md-12">
            <Carousel
              activeItem={this.state.activeItem}
              next={this.next}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                  <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://image.ibb.co/hT4SP7/dois.jpg" alt="First slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p className="banner">Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <div className="view hm-black-strong">
                    <img className="d-block w-100" src="https://image.ibb.co/hxayE7/b3.jpg" alt="Second slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p className="banner">Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <div className="view hm-black-slight">
                    <img className="d-block w-100" src="https://image.ibb.co/cZHTE7/b2.jpg" alt="Third slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p className="banner">Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://image.ibb.co/g0fgZ7/b4.jpg" alt="Mattonit's item" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p className="banner">Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
              </CarouselInner>
              <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
            </Carousel>
          </div>

        </div>

        <EdgeHeader color="teal darken-4" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>

                <img className="d-block w-100" src="https://image.ibb.co/iMvrSS/lupajob.png" alt="Third slide" />

                <p className="text-center">Uma maneira diferente de encontrar seu emprego.</p>
                <p className="text-center">Escolha a área de seu interesse.</p>
                <p className="text-center">Ache seu emprego</p>

              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h3 className="text-center mb-3">Recursos</h3>
              <Row>
                <Col md="6" className="text-center home-feature-box">
                  <Card>
                    <CardBody>
                      <Fa icon="map-marker" className="red-text" /> <br />
                      <span>Mapa</span>
                      <p /> Selecione no mapa a área de interesse.
                  </CardBody>
                  </Card>
                </Col>

                <Col md="6" className="text-center home-feature-box">
               <Card>
                <CardBody>
                <Fa icon="building" className="black-text" /> <br/>
                    <span>Vagas</span>
                    <p/> Encontre a vaga mais próxima.
                  </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>


        <Container>
          <Row>
            <Col md="12" className="mx-auto mt-4">
              <hr />
              <h3 className="text-center mb-3">Depoimentos</h3>
              <Row>
                <Col md="6" className="text-center home-feature-box">


                  <div className="container">
                    <div className="row mt-5">
                      <div className="col" style={{ maxWidth: '30rem' }}>
                        <Card>
                          <CardImage className="img-fluid" src="https://image.ibb.co/buUZnS/bruna.jpg" />
                          <CardBody>
                            <CardTitle>Beatriz Gomes</CardTitle>
                            <p className="cardtext"> Incrível o quão rápido foi para conseguir encontrar uma vaga, o site ajudou muito!</p>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </div>


                </Col>
                <Col md="6" className="text-center home-feature-box">
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col" style={{ maxWidth: '30rem' }}>
                        <Card>
                          <CardImage className="img-fluid" src="https://image.ibb.co/e0D5u7/ator.jpg" />
                          <CardBody>
                            <CardTitle>Roberto Martins</CardTitle>
                            <p className="cardtext">Encontrei o emprego perfeito para mim e mais perto do que eu imaginava! </p>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <br />


      </div>
    );
  }
}

export default HomePage;

