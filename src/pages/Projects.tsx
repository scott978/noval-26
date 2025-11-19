import { useState } from "react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import { NavLink } from "@/components/NavLink";

type ProjectCategory = "all" | "kitchen" | "bathroom" | "laundry";

const projects = [
  { 
    id: 1, 
    image: projectKitchen, 
    title: "Toorak Residence", 
    location: "Toorak, VIC", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 2, 
    image: projectBathroom, 
    title: "Brighton Manor", 
    location: "Brighton, VIC", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 3, 
    image: projectLaundry, 
    title: "South Yarra Terrace", 
    location: "South Yarra, VIC", 
    category: "laundry" as ProjectCategory 
  },
  { 
    id: 4, 
    image: projectKitchen, 
    title: "Armadale House", 
    location: "Armadale, VIC", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 5, 
    image: projectBathroom, 
    title: "Malvern Estate", 
    location: "Malvern, VIC", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 6, 
    image: projectLaundry, 
    title: "St Kilda Apartment", 
    location: "St Kilda, VIC", 
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
          <h1 className="text-6xl lg:text-7xl font-serif mb-8 fade-in">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl fade-in">
            A collection of our recent work, showcasing our commitment to refined design 
            and exceptional craftsmanship
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-16 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "All", value: "all" },
              { label: "Kitchen", value: "kitchen" },
              { label: "Bathroom", value: "bathroom" },
              { label: "Laundry", value: "laundry" },
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
      </div>
    </div>
  );
};

export default Projects;
