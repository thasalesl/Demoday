import React from 'react';
import { Media, Input, FormInline, Button, Card, CardBody, CardImage, CardTitle, CardText, Container, Tooltip, Row, NavLink, Col, Jumbotron, Fa } from 'mdbreact';

// div className="container-fluid text-center"

const MediaPage = (props) => {
  return (

    <div style={{ textAlign: 'initial' }}>
    <Row className="page">
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h6 className="text-center">Informações Essenciais</h6>
              <Input label="Nome Completo" icon="user" />
              <Input label="Email" icon="envelope" />
              <Input label="Telefone" type="tel" icon="mobile-phone" />
        <Input label="Linkdin" icon="linkedin" group type="url"  />
        <div className="text-center">
        <Button >Salvar</Button>
        </div>
           
            </Jumbotron>
          </Col>
        </Row>
        
 
    </div>
  );
};

export default MediaPage;