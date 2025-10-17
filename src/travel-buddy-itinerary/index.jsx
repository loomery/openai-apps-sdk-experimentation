import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { MapPin, Calendar, Plus, CheckCircle } from "lucide-react";

function ItineraryApp() {
  const [itinerary, setItinerary] = useState([
    {
      id: 1,
      day: "Day 1",
      activities: [
        { id: 1, time: "9:00 AM", activity: "Arrive at destination", location: "Airport", completed: false },
        { id: 2, time: "11:00 AM", activity: "Check into hotel", location: "Downtown Hotel", completed: false },
        { id: 3, time: "2:00 PM", activity: "City walking tour", location: "Historic District", completed: false },
      ]
    },
    {
      id: 2,
      day: "Day 2", 
      activities: [
        { id: 4, time: "8:00 AM", activity: "Museum visit", location: "Art Museum", completed: false },
        { id: 5, time: "1:00 PM", activity: "Local restaurant", location: "Food District", completed: false },
        { id: 6, time: "4:00 PM", activity: "Shopping", location: "Main Street", completed: false },
      ]
    }
  ]);

  const [newActivity, setNewActivity] = useState({ time: "", activity: "", location: "" });

  const toggleActivity = (dayId, activityId) => {
    setItinerary(prev => prev.map(day => 
      day.id === dayId 
        ? {
            ...day,
            activities: day.activities.map(activity =>
              activity.id === activityId 
                ? { ...activity, completed: !activity.completed }
                : activity
            )
          }
        : day
    ));
  };

  const addActivity = (dayId) => {
    if (newActivity.time && newActivity.activity && newActivity.location) {
      const newId = Math.max(...itinerary.flatMap(day => day.activities.map(a => a.id))) + 1;
      setItinerary(prev => prev.map(day => 
        day.id === dayId 
          ? {
              ...day,
              activities: [...day.activities, { ...newActivity, id: newId, completed: false }]
            }
          : day
      ));
      setNewActivity({ time: "", activity: "", location: "" });
    }
  };

  return (
    <div 
      className="antialiased w-full text-white p-6 flex flex-col min-h-[500px] relative overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(16, 185, 129, 0.8)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-2">
          Pre-Trip Planner
        </h1>
        <p className="text-white/90 text-lg">Plan your perfect travel itinerary</p>
      </div>

      {/* Itinerary Content */}
      <div className="flex-1 space-y-4 relative z-10">
        {itinerary.map((day) => (
          <div key={day.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-white">{day.day}</h3>
            
            <div className="space-y-2">
              {day.activities.map((activity) => (
                <div 
                  key={activity.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                    activity.completed 
                      ? 'bg-green-500/20 border border-green-400/30' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggleActivity(day.id, activity.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      activity.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-white/50 hover:border-white'
                    }`}
                  >
                    {activity.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{activity.time}</span>
                    </div>
                    <div className="text-white font-medium">{activity.activity}</div>
                    <div className="flex items-center gap-1 text-sm text-white/70">
                      <MapPin className="w-3 h-3" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Activity Form */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="grid grid-cols-3 gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Time (e.g., 2:00 PM)"
                  value={newActivity.time}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, time: e.target.value }))}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm"
                />
                <input
                  type="text"
                  placeholder="Activity"
                  value={newActivity.activity}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, activity: e.target.value }))}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={newActivity.location}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, location: e.target.value }))}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm"
                />
              </div>
              <button
                onClick={() => addActivity(day.id)}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Activity
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-6 relative z-10">
        <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
          Save Itinerary
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg">
          Export Plan
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("travel-buddy-itinerary-root")).render(<ItineraryApp />);

export { ItineraryApp };
export default ItineraryApp;
