import { useState } from "react";
import { NavLink } from "react-router-dom";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

type FilterType = "all" | "classic" | "modern" | "sleek" | "tranquil";

const BathroomProjects = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const projects = [
    { id: 1, image: projectBathroom, title: "Modern Luxury", location: "Stanmore", mood: "modern" as FilterType },
    { id: 2, image: projectKitchen, title: "Classic Charm", location: "Randwick", mood: "classic" as FilterType },
    { id: 3, image: projectLaundry, title: "Sleek Sanctuary", location: "Balgowlah", mood: "sleek" as FilterType },
    { id: 4, image: projectBathroom, title: "Tranquil Retreat", location: "Glebe", mood: "tranquil" as FilterType },
    { id: 5, image: projectKitchen, title: "Modern Elegance", location: "Kirribilli", mood: "modern" as FilterType },
    { id: 6, image: projectLaundry, title: "Classic Sophistication", location: "Maroubra", mood: "classic" as FilterType },
    { id: 7, image: projectBathroom, title: "Sleek Minimalism", location: "Seaforth", mood: "sleek" as FilterType },
    { id: 8, image: projectKitchen, title: "Tranquil Spa", location: "Marrickville", mood: "tranquil" as FilterType },
    { id: 9, image: projectLaundry, title: "Modern Serenity", location: "Rozelle", mood: "modern" as FilterType },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.mood === filter);

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
      <section className="py-8 px-6 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-4">Browse by Mood:</span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All", value: "all" as FilterType },
                { label: "Classic Charm", value: "classic" as FilterType },
                { label: "Modern Luxe", value: "modern" as FilterType },
                { label: "Sleek Sanctuary", value: "sleek" as FilterType },
                { label: "Tranquil Retreat", value: "tranquil" as FilterType },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  className={`text-sm tracking-wide px-4 py-2 transition-colors ${
                    filter === item.value
                      ? "bg-primary text-primary-foreground"
                      : "border border-input hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
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
