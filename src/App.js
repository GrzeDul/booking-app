import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Table from './components/pages/Table/Table';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
