import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Dashboard, Register, Edit, Error, PrivateRoute } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Home />} />

        {/* Ruta privada */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Otras rutas públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />

        {/* Ruta para manejar errores */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
