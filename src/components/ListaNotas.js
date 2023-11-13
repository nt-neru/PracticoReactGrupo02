// ListaNotas.jsx
import React, { useState } from "react";
import { Form, Row, Button, ListGroup, Col, InputGroup } from "react-bootstrap";
import Nota from "./Nota";

export default function ListaNotas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [notes, setNotes] = useState([]);

  const guardarInput = (e) => {
    setDescripcion(e.target.value);
  };

  const guardarTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const addNote = (e) => {
    if (titulo.trim() !== "" && descripcion.trim() !== "") {
      const descripcionExistente = notes.some((nota) => nota.descripcion === descripcion);

      if (!descripcionExistente) {
        const nuevaNota = {
          id: notes.length,
          titulo: titulo,
          descripcion: descripcion,
          estado: true,
        };
        setNotes([...notes, nuevaNota]);
        setTitulo("");
        setDescripcion("");
      } else {
        alert("La Nota ya existe");
      }
    }
  }

  const deleteNote = (id) => {
    const nuevaLista = notes.map((nota) =>
      nota.id === id ? { ...nota, estado: false } : nota
    );
    setNotes(nuevaLista);
  }

  return (
    <>
      <h1 className="m-4">Lista de Notas</h1>

      <Form>
        <InputGroup className="mb-3">
          <Button variant="success" onClick={addNote}>Agregar Nota</Button>
          <Form.Control
            type="text"
            onChange={guardarTitulo}
            placeholder="Título"
            value={titulo}
          />
          <Form.Control
            type="text"
            onChange={guardarInput}
            placeholder="Descripción"
            value={descripcion}
          />
        </InputGroup>
      </Form>

      <div className="justify-content-center">
        <ListGroup>
          {notes.map((nota) => (
            nota.estado ? (
              <Nota
                key={nota.id}
                id={nota.id}
                titulo={nota.titulo}
                descripcion={nota.descripcion}
                delete={deleteNote}
              />
            ) : null
          ))}
        </ListGroup>
      </div>
    </>
  );
}
