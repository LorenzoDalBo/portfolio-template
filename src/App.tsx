import { Header } from './components/Header';
import { Hero, Services, Solutions, About, Contact } from './components/sections';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Contact />

      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              &copy; 2024 TechSolutions. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
