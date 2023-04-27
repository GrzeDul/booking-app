import { Container } from 'react-bootstrap';
import TableForm from '../../features/TableForm/TableForm';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router';
function Table() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  if (!loading) {
    setLoading(true);
    return <Navigate to='/' />;
  } else {
    return (
      <Container>
        <h1>Table {id}</h1>
        <TableForm setLoading={setLoading} id={id} loading={loading} />
      </Container>
    );
  }
}

export default Table;
