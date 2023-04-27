import { Container } from 'react-bootstrap';
import TableForm from '../../features/TableForm/TableForm';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
function Table() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  if (loading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container>
        <h1>Table {id}</h1>
        <TableForm setLoading={setLoading} id={id} />
      </Container>
    );
  }
}

export default Table;
