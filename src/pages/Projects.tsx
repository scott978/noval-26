import { useState } from "react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import { NavLink } from "@/components/NavLink";

type ProjectCategory = "all" | "bathroom" | "kitchen" | "laundry";

const projects = [
  { 
    id: 1, 
    image: projectBathroom, 
    title: "Vaucluse Bathroom", 
    location: "Vaucluse, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 2, 
    image: projectKitchen, 
    title: "Mosman Kitchen", 
    location: "Mosman, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 3, 
    image: projectLaundry, 
    title: "Double Bay Laundry", 
    location: "Double Bay, Sydney", 
    category: "laundry" as ProjectCategory 
  },
  { 
    id: 4, 
    image: projectBathroom, 
    title: "Bellevue Hill Ensuite", 
    location: "Bellevue Hill, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 5, 
    image: projectKitchen, 
    title: "Rose Bay Kitchen", 
    location: "Rose Bay, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 6, 
    image: projectLaundry, 
    title: "Paddington Laundry", 
    location: "Paddington, Sydney", 
    category: "laundry" as ProjectCategory 
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl lg:text-7xl font-serif mb-8 fade-in">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl fade-in">
            Explore our portfolio of stunning bathroom, kitchen and laundry renovations 
            across Sydney's most prestigious suburbs
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-16 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "All Projects", value: "all" },
              { label: "Bathrooms", value: "bathroom" },
              { label: "Kitchens", value: "kitchen" },
              { label: "Laundries", value: "laundry" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as ProjectCategory)}
                className={`text-sm tracking-wide transition-colors ${
                  filter === option.value 
                    ? "text-primary underline" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/${project.category}/${project.id}`}
              className="group block fade-in"
            >
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary-foreground text-sm tracking-wide px-6 py-2 border border-primary-foreground">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-32 pt-32 border-t border-border text-center">
          <h2 className="text-4xl font-serif mb-6">Ready for your own transformation?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a free online estimate and discover how we can create your dream space
          </p>
          <NavLink 
            to="/contact"
            className="inline-block text-sm tracking-wide px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Your Free Quote
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Projects;
