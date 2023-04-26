import { useEffect, useState } from 'react';
import { getTables, fetchTables } from '../../../redux/tablesRedux';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
function TablesList() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const tables = useSelector((state) => getTables(state));
  useEffect(() => dispatch(fetchTables(setLoading)), [dispatch]);

  if (isLoading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return tables.map((table) => (
      <Card key={table.id}>
        <Card.Body className='d-flex'>
          <Card.Title className='text-bold'>Table {table.id}</Card.Title>
          <Card.Text className='ms-3'>
            <span className='text-bold'>Status:</span> {table.status}
          </Card.Text>
          <Link to={`/table/${table.id}`} className='ms-auto'>
            <Button variant='primary'>Show more</Button>
          </Link>
        </Card.Body>
      </Card>
    ));
  }
}

export default TablesList;
