import './App.css';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characterDetail/CharacterDetail';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/characters' element={<Characters/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/detail/:id' element={<CharacterDetail/>} />
    </Routes>
  );
}

export default App;
