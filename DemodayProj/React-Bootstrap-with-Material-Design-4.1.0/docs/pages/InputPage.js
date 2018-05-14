import React from 'react';
import { Input, FormInline, Button } from 'mdbreact';

import { Card, CardBody, CardImage, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader, CardText, Container, Row, Col, NavLink, Fa } from 'mdbreact';
import './HomePage.css';

class InputPage extends React.Component {


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
      <div className="page">
        <br />

        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <Row>
                <Col md="6">

                  <Card className="login">
                    <CardBody>
                      <form>
                        <p className="h5 text-center mb-4">Já é membro?</p>
                        <Input label="E-mail" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <Input label="Senha" icon="lock" group type="password" validate />
                        <div className="text-center">
                        <Button color="blue" onClick={this.toggle} >Login</Button>
                        </div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
                          <ModalHeader toggle={this.toggle}><p className="text-center"/>Olá usuário</ModalHeader>
                          <ModalBody>
                            Bem vindo ao LupaJob

       </ModalBody>
                          <ModalFooter>
                            <Button color="teal darken-4" onClick={this.toggle}>Ok</Button>
                          </ModalFooter>
                        </Modal>

                      </form>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">

                  <Card>
                    <CardBody>
                      <form>
                        <p className="h5 text-center mb-4">Não tem conta?</p>
                        <Input label="Nome" icon="user" group type="email" validate error="wrong" success="right" />
                        <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <Input label="Senha" icon="lock" group type="password" validate />
                       <div className="text-center">
                        <Button color="orange" onClick={this.toggle} >Inscrever</Button>
                        </div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
                          <ModalHeader toggle={this.toggle}><p className="text-center"/>Olá usuário</ModalHeader>
                          <ModalBody>
                            Bem vindo ao LupaJob

                            </ModalBody>
                          <ModalFooter>
                            <Button color="teal darken-4" onClick={this.toggle}>Ok</Button>
                          </ModalFooter>
                        </Modal>
                        <br />

                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="row">
          <div className="col-12">
            <div >
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default InputPage;
