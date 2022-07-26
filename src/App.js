import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Navbar, SideNav, Footer, SnackbarComponent } from './components';
import { MainProvider } from './context/MainContext';
import ScrollToTop from './hooks/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <>
        <MainProvider>
        <Router>
        <GlobalStyle />
        <Navbar />
        <SideNav />
        <SnackbarComponent />
            <ScrollToTop>
                <AnimatedRoutes />
            </ScrollToTop>
        <Footer />
        </Router>
        </MainProvider>
    </>
  );
}

export default App;
