import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Juegos from './views/Juegos';
import Plataformas from './views/Plataformas';
import About from './views/About';
import Favorites from './views/Favorites';
import Footer from './components/Footer';
import Nav from './components/Nav';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav/>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/juegos' element={<Juegos />}/>
            <Route path='/plataformas' element={<Plataformas/>}/>
            <Route path='/nosotros' element={<About/>}/>
            <Route path='/favoritos' element={<Favorites/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
