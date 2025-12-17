import { Button } from '../ui';
import { useScrollToSection } from '../../utils/hooks';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white flex items-center pt-20 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Transform Your IT Infrastructure
              </h1>
              <p className="text-xl text-primary-100 mb-6 leading-relaxed">
                Comprehensive IT solutions designed to streamline your operations, enhance security,
                and drive digital transformation for modern businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-900"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary-700">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-primary-200">Clients Worldwide</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <p className="text-primary-200">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="text-primary-200">Uptime Guarantee</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-96 animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-primary-200 rounded-2xl opacity-20"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-400 rounded-2xl opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-600 rounded-2xl opacity-10 blur-3xl"></div>

            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" opacity="0.2" />
              <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="currentColor" fillOpacity="0.05" />
              <path d="M200 50 Q350 200 200 350 Q50 200 200 50" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
