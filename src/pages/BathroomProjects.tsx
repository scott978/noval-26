import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

type FilterType = "all" | "classic" | "modern" | "sleek" | "tranquil";
type RoomType = "all" | "bathroom" | "kitchen" | "laundry";
type Location = string;

const BathroomProjects = () => {
  const [moodFilter, setMoodFilter] = useState<FilterType>("all");
  const [roomFilter, setRoomFilter] = useState<RoomType>("all");
  const [locationFilter, setLocationFilter] = useState<Location>("all");
  const [keywordFilter, setKeywordFilter] = useState("");

  const projects = [
    { id: 1, image: projectBathroom, title: "Modern Luxury", location: "Stanmore", mood: "modern" as FilterType, room: "bathroom" as RoomType },
    { id: 2, image: projectKitchen, title: "Classic Charm", location: "Randwick", mood: "classic" as FilterType, room: "kitchen" as RoomType },
    { id: 3, image: projectLaundry, title: "Sleek Sanctuary", location: "Balgowlah", mood: "sleek" as FilterType, room: "laundry" as RoomType },
    { id: 4, image: projectBathroom, title: "Tranquil Retreat", location: "Glebe", mood: "tranquil" as FilterType, room: "bathroom" as RoomType },
    { id: 5, image: projectKitchen, title: "Modern Elegance", location: "Kirribilli", mood: "modern" as FilterType, room: "kitchen" as RoomType },
    { id: 6, image: projectLaundry, title: "Classic Sophistication", location: "Maroubra", mood: "classic" as FilterType, room: "laundry" as RoomType },
    { id: 7, image: projectBathroom, title: "Sleek Minimalism", location: "Seaforth", mood: "sleek" as FilterType, room: "bathroom" as RoomType },
    { id: 8, image: projectKitchen, title: "Tranquil Spa", location: "Marrickville", mood: "tranquil" as FilterType, room: "kitchen" as RoomType },
    { id: 9, image: projectLaundry, title: "Modern Serenity", location: "Rozelle", mood: "modern" as FilterType, room: "laundry" as RoomType },
  ];

  const uniqueLocations = ["all", ...Array.from(new Set(projects.map(p => p.location)))];

  const filteredProjects = projects.filter(project => {
    const matchesMood = moodFilter === "all" || project.mood === moodFilter;
    const matchesRoom = roomFilter === "all" || project.room === roomFilter;
    const matchesLocation = locationFilter === "all" || project.location === locationFilter;
    const matchesKeyword = keywordFilter === "" || 
      project.title.toLowerCase().includes(keywordFilter.toLowerCase()) ||
      project.location.toLowerCase().includes(keywordFilter.toLowerCase());
    
    return matchesMood && matchesRoom && matchesLocation && matchesKeyword;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-serif mb-8 fade-in">
            Bathroom Renovation Projects
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl fade-in">
            We've been renovating Bathrooms for over 22 years and have worked on a huge range of projects. 
            Whether you have a small or large space to work with, we can turn it into an extraordinary space 
            that will balance everyday living with gorgeous design and impeccable craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 border-t border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Keyword Search */}
          <div>
            <input
              type="text"
              placeholder="Search by keyword..."
              value={keywordFilter}
              onChange={(e) => setKeywordFilter(e.target.value)}
              className="w-full px-4 py-2 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Mood Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground mr-2">Mood:</span>
            {[
              { label: "All", value: "all" as FilterType },
              { label: "Classic Charm", value: "classic" as FilterType },
              { label: "Modern Luxe", value: "modern" as FilterType },
              { label: "Sleek Sanctuary", value: "sleek" as FilterType },
              { label: "Tranquil Retreat", value: "tranquil" as FilterType },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setMoodFilter(item.value)}
                className={`text-sm tracking-wide px-4 py-2 transition-colors ${
                  moodFilter === item.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-input hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Room Type Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground mr-2">Room:</span>
            {[
              { label: "All", value: "all" as RoomType },
              { label: "Bathroom", value: "bathroom" as RoomType },
              { label: "Kitchen", value: "kitchen" as RoomType },
              { label: "Laundry", value: "laundry" as RoomType },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setRoomFilter(item.value)}
                className={`text-sm tracking-wide px-4 py-2 transition-colors ${
                  roomFilter === item.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-input hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Location Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground mr-2">Location:</span>
            {uniqueLocations.map((location) => (
              <button
                key={location}
                onClick={() => setLocationFilter(location)}
                className={`text-sm tracking-wide px-4 py-2 transition-colors ${
                  locationFilter === location
                    ? "bg-primary text-primary-foreground"
                    : "border border-input hover:bg-secondary"
                }`}
              >
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <NavLink
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative overflow-hidden aspect-[4/5] fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-500">
                  <div className="absolute top-4 right-4 bg-brand-teal p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                    <p className="text-sm">{project.location}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Create Your Dream Bathroom?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us transform your space into something extraordinary.
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-brand-teal-dark transition-colors"
          >
            Get Your Free Quote
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default BathroomProjects;
