import { Route, Routes } from 'react-router-dom';

import ProjectList from '../src/pages/ProjectList';
import Main from '../src/pages/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projectList' element={<ProjectList />} />
    </Routes>
  );
}

export default App;
