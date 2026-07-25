import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Receptionist from './components/Receptionist';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">🏥 MediTrack Queue System</h1>
        
        {/* Simple Navigation Menu */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <Link to="/receptionist" className="btn btn-outline-primary">Receptionist View</Link>
          <Link to="/patient" className="btn btn-outline-success">Patient View</Link>
        </div>

        <Routes>
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/patient" element={<h2 className="text-center">Patient View (Coming Soon)</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;