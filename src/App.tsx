import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThankYou from './ThankYou';
import IndicationLinkGenerator from './IndicationLinkGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerador-indicacao" element={<IndicationLinkGenerator />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
