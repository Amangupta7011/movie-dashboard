import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm py-6 shadow-lg border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Movie Dashboard
              </h1>
              <nav className="hidden md:flex space-x-6 text-slate-300">
                <button className="hover:text-yellow-500 transition-colors">Popular</button>
                <button className="hover:text-yellow-500 transition-colors">Top Rated</button>
                <button className="hover:text-yellow-500 transition-colors">Upcoming</button>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <MovieGrid />
        </main>
        <footer className="bg-slate-900/50 border-t border-slate-800 py-6">
          <div className="container mx-auto px-4 text-center text-slate-400">
            <p>Powered by TMDB API • Built with React and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App; 