import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, Media, Button, Card, CardBody, CardImage, CardTitle, CardText, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;
import './HomePage.css';


// import mapa from ".\5formaspersonalizarinfowindow\index.html";

class JavaScriptPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Container>

        <div className="row">
          <div className="col-md-8">
          <br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1680559989536!2d-46.65646068568385!3d-23.5624069846824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574e7a16c667%3A0x2ef43bda9ab2b4f3!2sMasterTech!5e0!3m2!1spt-BR!2sbr!4v1523796993977" width="800" height="600" frameBorder="0" allowFullScreen></iframe>

          </div>
          <div className="col-md-4 ">
            <Media>
              <Media left href="#" className="mr-3">
              </Media>
              <Media body>
                <Media heading><br />
                  <p className="titulo" /> Vagas
    </Media>
              </Media>
            </Media>
            <Card>
              <br />
              <CardImage className="img-fluid" className="mx-auto d-block" src="https://image.ibb.co/n9UAWn/m.png" />
              <CardBody>
                <CardTitle>Mastertech - Ninja</CardTitle>
                <CardText> A Mastertech é mais do que uma escola, estamos educando para o futuro.</CardText>
                <Button color="danger" onClick={this.toggle} >Candidatar-se</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
                  <ModalHeader toggle={this.toggle}><p />Parabéns</ModalHeader>
                  <ModalBody>
                    Seu currículo foi enviado para essa vaga.

       </ModalBody>
                  <ModalFooter>
                    <Button color="teal darken-4" onClick={this.toggle}>Ok</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default JavaScriptPage;
