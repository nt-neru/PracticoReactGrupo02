import React, { useState } from "react";
import { Form, Row, Button, ListGroup, Col, InputGroup } from "react-bootstrap";
import Nota from "./Nota";

export default function ListaNotas() {
  const [descripcion, setDescripcion] = useState(""); // Usar un estado separado para la descripción
  const [notes, setNotes] = useState([]);             // Controla el estado de un array, define y setea

  const guardarInput = (e) => {
    setDescripcion(e.target.value);
  };

  const addNote = (e) => {
    if (descripcion.trim() !== "") {
      const descripcionExistente = notes.some((nota) => nota.descripcion === descripcion);
      
      if (!descripcionExistente) {
        const nuevaNota = {
          id: notes.length,         // Asignar un ID único
          descripcion: descripcion, // Le agrega el valor de descripcion a la nota
          estado: true,             // Estado de la nota
        };
        setNotes([...notes, nuevaNota]);
        setDescripcion("");         // Limpiar el campo de descripción
      } else {
        alert("La Nota ya existe") // La descripción ya existe
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
          <Button variant="success" onClick={addNote} >Agregar Nota</Button>
          <Form.Control 
            type="text" 
            onChange={guardarInput} 
            autoFocus 
            placeholder="Descripcion"
            value={descripcion} // Usar el valor del estado para el campo de entrada
          />
        </InputGroup>
      </Form>

      <div className="justify-content-center">
        {notes.map((nota) => (
          nota.estado ? ( // Solo mostrar notas con estado true
            < Nota
              key={nota.id}
              id={nota.id}
              descripcion={nota.descripcion}
              delete={deleteNote}
            ></Nota>
          ) : null
        ))}
      </div>
    </>
  );

}
