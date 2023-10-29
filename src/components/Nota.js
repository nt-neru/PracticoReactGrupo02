import React from "react";
import { Row, Button, ListGroup, Col } from "react-bootstrap";

export default function Nota(props) {
  return (
    <ListGroup>
      <Row>
        <Col sm={11}>
          <ListGroup.Item key={props.id}>{props.descripcion}</ListGroup.Item>
        </Col>
        <Col sm={1}>
          <Button variant="danger" onClick={() => props.delete(props.id)}>
            Eliminar
          </Button>
        </Col>
      </Row>
    </ListGroup>
  );
}
