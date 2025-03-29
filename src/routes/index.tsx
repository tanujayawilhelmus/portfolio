import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoutes;
