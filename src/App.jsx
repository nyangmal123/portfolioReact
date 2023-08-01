import { Route, Routes } from 'react-router-dom';
import './App.css';

import ProjectsList from '../src/pages/ProjectList';
import Main from '../src/pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projectsList' element={<ProjectsList />} />
    </Routes>
  );
}

export default App;
