import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Navbar, SideNav } from './components';
import { Home, About, Services, Contact } from './pages';
import { MainProvider } from './context/MainContext';

function App() {
  return (
    <>
        <MainProvider>
        <Router>
        <GlobalStyle />
        <Navbar />
        <SideNav />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </Router>
        </MainProvider>
    </>
  );
}

export default App;
