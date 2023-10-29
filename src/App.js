import React from 'react';
import { Container, Row } from 'react-bootstrap';

//Componente
import ListaNotas from './components/ListaNotas'; 

export default function App(){
    return( 
        <Container>
            <Row>
                <ListaNotas></ListaNotas>
            </Row>
        </Container>
    );
}