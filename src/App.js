import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles';
import { Navbar, SideNav, Footer, SnackbarComponent } from './components';
import { MainProvider } from './context/MainContext';
import ScrollToTop from './hooks/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';
import Lenis from '@studio-freight/lenis';

function App() {
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
      
      //get scroll value
      lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        console.log({ scroll, limit, velocity, direction, progress })
      })
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)

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
