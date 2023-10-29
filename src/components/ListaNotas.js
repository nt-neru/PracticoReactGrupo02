import React, { useState } from "react";
import Nota from "./Nota";
import { Form, Row, Button, ListGroup, Col, InputGroup } from "react-bootstrap";


export default function ListaNotas() {
  const [descripcion, setDescripcion] = useState(""); // Usar un estado separado para la descripción


  const [notes, setNotes] = useState([]); // Controla el estado de una variable, define y setea

  // mostrar notas que tengan un estado en true
  // mapeo con un if

  const guardarInput = (e) => {
    setDescripcion(e.target.value);
  };

  const addNote = (e) => {
    if (descripcion.trim() !== "") {
      const descripcionExistente = notes.some((nota) => nota.descripcion === descripcion);
      
      if (!descripcionExistente) {
        const nuevaNota = {
          id: notes.length, // Asignar un ID único
          descripcion: descripcion, // Le agrega el valor de descripcion a la nota
          estado: true, // Estado de la nota
        };
        setNotes([...notes, nuevaNota]);
        setDescripcion(""); // Limpiar el campo de descripción
      } else {
        // La descripción ya existe, puedes mostrar un mensaje de error o tomar otra acción.
        alert("La Nota ya existe")
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
          <Button type="reset" variant="success" onClick={addNote} >Agregar Nota</Button>
          <Form.Control type="text" onChange={guardarInput} autoFocus placeholder="Descripcion"
            value={descripcion} // Usar el valor del estado para el campo de entrada
            /* onReset={() => setDescripcion("")}  */
          />
        </InputGroup>
      </Form>

      <div className="justify-content-center" id="lista">
        {notes.map((nota) => (
          nota.estado ? ( // Solo mostrar notas con estado true
          <>
            <ListGroup>
              <Row >
                <Col sm={11}>
                  <ListGroup.Item key={nota.id}>
                    {nota.descripcion}
                  </ListGroup.Item>
                </Col>
                <Col sm={1}>
                  <Button variant="danger" onClick={() => deleteNote(nota.id)}>Eliminar</Button>
                </Col>
              </Row>
            </ListGroup>
          </>
          ) : null
        ))}
      </div>
    </>
  );

}
