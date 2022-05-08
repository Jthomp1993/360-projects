import styled from 'styled-components/macro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Navbar } from './components';
import { Home, About, Services, Contact } from './pages';

function App() {
  return (
    <>
        <Router>
        <GlobalStyle />
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
