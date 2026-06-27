import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AIPlanner from './pages/AIPlanner.jsx';
import MyTrips from './pages/MyTrips.jsx';
import Login from './pages/Login.jsx';
import UIShowcase from './pages/UIShowcase.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-planner" element={<AIPlanner />} />
      <Route path="/my-trips" element={<MyTrips />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ui-showcase" element={<UIShowcase />} />
    </Routes>
  );
}

export default App;
