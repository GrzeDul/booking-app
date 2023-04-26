import { Container } from 'react-bootstrap';
import TablesList from '../../features/TablesList/TablesList';
function Home() {
  return (
    <Container>
      <h1>All tables</h1>
      <TablesList />
    </Container>
  );
}

export default Home;
