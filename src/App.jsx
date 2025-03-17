import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext';
import Sidebar from './components/Sidebar';
import CustomerManagement from './pages/CustomerManagement';
import CustomerStats from './pages/CustomerStats';
import './index.css';

function App() {
  return (
    <Router>
      <CustomerProvider>
        <div className="min-h-screen bg-gray-100 flex min-w-fit">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<CustomerManagement />} />
              <Route path="/stats" element={<CustomerStats />} />
            </Routes>
          </main>
        </div>
      </CustomerProvider>
    </Router>
  );
}

export default App;