import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <SEOHead />
      <Navbar />
      <main className="w-full">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
