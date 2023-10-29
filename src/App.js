import React from 'react';
import { Container, Row } from 'react-bootstrap';

//Componentes
import ListaNotas from './components/ListaNotas'; 

function App(){ // Componente Padre

    const sitio={
        img: ",",
        nombre: "",
        descripcion: "",
        valoracion: "",
    }

    const addSitio= (sitio) =>{
        // setSitios([...sitios, newSitio]);

    }

    // onSubmit : llama una funcion PROPS

    return( 
        <Container>
            <Row>
                <ListaNotas></ListaNotas>
            </Row>
        </Container>
    );
}
export default App;