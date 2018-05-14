import React, { Component } from 'react';

import { Media, Carousel, CarouselCaption, CarouselControl, Card, CardImage,CardTitle, CardText, Button, CarouselInner, CarouselItem, EdgeHeader, FreeBird, Container, NavLink, Col, Row, CardBody, Fa  } from 'mdbreact';
// import logoEmp from './img/logoEmprego.png';
class CarouselPage extends Component {

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
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
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

  render(){

    const { activeItem } = this.state;

    return(
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
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p>Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <div className="view hm-black-strong">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Empregos</h3>
                    <p>Perto de você</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <div className="view hm-black-slight">
                 {/* < img src={logoEmprego}/> */}
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Slight mask</h3>
                    <p>Third text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Sopot Beach</h3>
                    <p>Taken june 21th by @mattonit</p>
                  </CarouselCaption>
                </CarouselItem>
              </CarouselInner>
              <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
            </Carousel>
          {/* </div> */}
        </div>



        
      </div>

      <EdgeHeader color="teal darken-4" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"  className="text-center"><strong>Codex Empregos</strong></h2>
                {/* <h1 class="text-hide" style="background-image: url('https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'); width: 250px; height: 90px;">Codex Empregos</h1> */}
                <p className="pb-4">Procure empregos perto de você</p>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <p className="text-center">Uma maneira diferente de encontrar seu emprego.</p>
              <p className="text-center">Escolha a área de seu interesse.</p>
              <p className="text-center">Ache seu emprego</p>
              <hr/>
              <h3 className="text-center mb-3">Recursos</h3>
              <Row>
                <Col md="6" className="text-center home-feature-box">
                  <NavLink to="/css">
                    <Fa icon="map-marker" className="red-text" />
                    <span>Mapa</span>
                  </NavLink>
                </Col>
                <Col md="6" className="text-center home-feature-box">
                  <NavLink to="/components">
                    <Fa icon="building" className="black-text" />
                    <span>Vagas</span>
                  </NavLink>
                </Col>
                {/* <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/javascript">
                    <Fa icon="code" className="green-text" />
                    <span>Av</span>
                  </NavLink>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>

        <ul class="list-unstyled">
    <li class="media">
      <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image"/>
        <div class="media-body">
            <h5 class="mt-0 mb-2 font-weight-bold">Anna Smith</h5>
            
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
    </li>
    <li class="media my-4">
        <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image"/>
        <div class="media-body">
            <h5 class="mt-0 mb-2 font-weight-bold">Tom Brown</h5>
           
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star grey-text"> </i>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
    </li>
    <li class="media">
        <img class="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image"/>
        <div class="media-body">
            <h5 class="mt-0 mb-2 font-weight-bold">Natalie Doe</h5>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star blue-text"> </i>
            <i class="fa fa-star grey-text"> </i>
            <i class="fa fa-star grey-text"> </i>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
    </li>
</ul>




<Media list className="mt-3">
  <Media tag="li">
    <Media left href="#">
      <Media object src="https://placehold.it/64x64" alt="Generic placeholder image" />
    </Media>
    <Media body>
      <Media heading>
        Ana Clara
      </Media>
      Encontrei o emprego perfeito para mim e mais perto do que eu imaginava!    </Media>
  </Media>
  <Media tag="li">
    <Media left href="#">
      <Media object src="https://placehold.it/64x64" alt="Generic placeholder image" />
    </Media>
    <Media body>
      <Media heading>
       Beatriz Gomes
      </Media>
      <p/> Incrível o quão rápido foi para conseguir encontrar uma vaga, o site ajudou muito!
    </Media>
  </Media>
  <Media tag="li">
    <Media left href="#">
      <Media object src="https://placehold.it/64x64" alt="Generic placeholder image" />
    </Media>
    <Media body>
      <Media heading>
        List-based media object
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
</Media>
                                    
                                    
      </div>
    );
  }
}

export default CarouselPage;