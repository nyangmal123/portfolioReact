import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import Project from '../pages/Project';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/introduce' element={<Introduce />} />
      <Route path='/project' element={<Project />} />
    </Routes>
  );
}

export default Router;
