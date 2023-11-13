// Nota.jsx
import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export default function Nota({ id, titulo, descripcion, delete: deleteNote }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{titulo}</strong>: {descripcion}
      </div>
      <Button variant="danger" onClick={() => deleteNote(id)}>
        Eliminar
      </Button>
    </ListGroup.Item>
  );
}
