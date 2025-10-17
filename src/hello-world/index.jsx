import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div 
      className="antialiased w-full text-white p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)), url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -right-8 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-500"></div>
        <div className="absolute -bottom-6 right-1/4 w-20 h-20 bg-white/8 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="inline-block mb-6">
          <h1 className="text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
            HELLO WORLD
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
        </div>
        
        <p className="text-xl text-white/90 mb-8 font-medium drop-shadow-lg">
          Welcome to the future of interactive widgets! 🚀
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>
        
        <div className="mt-8 flex justify-center space-x-6 text-white/70">
          <div className="text-center">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">Interactive</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">∞</div>
            <div className="text-sm">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">⚡</div>
            <div className="text-sm">Fast</div>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("hello-world-root")).render(<App />);
