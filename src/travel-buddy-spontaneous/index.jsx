import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Zap, MapPin, Clock, Star, Heart, Share2 } from "lucide-react";

function SpontaneousApp() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());

  const spontaneousOptions = [
    {
      id: 1,
      title: "Last-Minute Flight Deal",
      location: "Paris, France",
      price: "$299",
      originalPrice: "$899",
      timeLeft: "2h 15m",
      category: "flights",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Spontaneous Hotel Stay",
      location: "Tokyo, Japan",
      price: "$89",
      originalPrice: "$189",
      timeLeft: "45m",
      category: "hotels",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Weekend Adventure",
      location: "Barcelona, Spain",
      price: "$149",
      originalPrice: "$299",
      timeLeft: "1h 30m",
      category: "experiences",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Food Tour Experience",
      location: "Bangkok, Thailand",
      price: "$39",
      originalPrice: "$79",
      timeLeft: "3h 20m",
      category: "experiences",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "City Break Package",
      location: "Prague, Czech Republic",
      price: "$199",
      originalPrice: "$399",
      timeLeft: "5h 45m",
      category: "packages",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Beach Getaway",
      location: "Santorini, Greece",
      price: "$179",
      originalPrice: "$359",
      timeLeft: "1h 10m",
      category: "packages",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const categories = [
    { id: "all", name: "All Deals", icon: "⚡" },
    { id: "flights", name: "Flights", icon: "✈️" },
    { id: "hotels", name: "Hotels", icon: "🏨" },
    { id: "experiences", name: "Experiences", icon: "🎯" },
    { id: "packages", name: "Packages", icon: "📦" }
  ];

  const filteredOptions = selectedCategory === "all" 
    ? spontaneousOptions 
    : spontaneousOptions.filter(option => option.category === selectedCategory);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div 
      className="antialiased w-full text-white p-6 flex flex-col min-h-[500px] relative overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-2">
          Spontaneous Booking
        </h1>
        <p className="text-white/90 text-lg">Find amazing last-minute deals</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 relative z-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-white/30 backdrop-blur-sm border border-white/40'
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 relative z-10">
        {filteredOptions.map((option) => (
          <div 
            key={option.id} 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200"
          >
            <div className="relative">
              <div 
                className="w-full h-32 rounded-lg mb-3 bg-cover bg-center"
                style={{ backgroundImage: `url(${option.image})` }}
              >
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(option.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.has(option.id) 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-white/20 text-white/70 hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(option.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/30 backdrop-blur-sm transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {option.timeLeft} left
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-lg">{option.title}</h3>
                
                <div className="flex items-center gap-1 text-white/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{option.location}</span>
                </div>
                
                <div className="flex items-center gap-1 text-white/80 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{option.rating}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{option.price}</span>
                    <span className="text-white/60 line-through text-sm">{option.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Deal!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-6 relative z-10">
        <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
          Refresh Deals
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("travel-buddy-spontaneous-root")).render(<SpontaneousApp />);

export { SpontaneousApp };
export default SpontaneousApp;
