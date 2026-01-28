import { useState } from "react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import { NavLink } from "@/components/NavLink";
import { ChevronDown } from "lucide-react";

type ProjectCategory = "all" | "bathroom" | "kitchen" | "laundry";

const projects = [
  { 
    id: 1,
    slug: "stanmore",
    image: projectBathroom, 
    title: "Stanmore", 
    location: "Stanmore, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 2,
    slug: "mosman",
    image: projectKitchen, 
    title: "Mosman", 
    location: "Mosman, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 3,
    slug: "double-bay",
    image: projectLaundry, 
    title: "Double Bay", 
    location: "Double Bay, Sydney", 
    category: "laundry" as ProjectCategory 
  },
  { 
    id: 4,
    slug: "randwick",
    image: projectBathroom, 
    title: "Randwick", 
    location: "Randwick, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 5, 
    slug: "rose-bay",
    image: projectKitchen, 
    title: "Rose Bay", 
    location: "Rose Bay, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 6,
    slug: "paddington",
    image: projectLaundry, 
    title: "Paddington", 
    location: "Paddington, Sydney", 
    category: "laundry" as ProjectCategory 
  },
  { 
    id: 7,
    slug: "bondi-beach",
    image: projectBathroom, 
    title: "Bondi Beach", 
    location: "Bondi Beach, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 8,
    slug: "surry-hills",
    image: projectKitchen, 
    title: "Surry Hills", 
    location: "Surry Hills, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 9,
    slug: "darlinghurst",
    image: projectLaundry, 
    title: "Darlinghurst", 
    location: "Darlinghurst, Sydney", 
    category: "laundry" as ProjectCategory 
  },
  { 
    id: 10,
    slug: "coogee",
    image: projectBathroom, 
    title: "Coogee", 
    location: "Coogee, Sydney", 
    category: "bathroom" as ProjectCategory 
  },
  { 
    id: 11,
    slug: "glebe",
    image: projectKitchen, 
    title: "Glebe", 
    location: "Glebe, Sydney", 
    category: "kitchen" as ProjectCategory 
  },
  { 
    id: 12,
    slug: "pyrmont",
    image: projectLaundry, 
    title: "Pyrmont", 
    location: "Pyrmont, Sydney", 
    category: "laundry" as ProjectCategory 
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [mood, setMood] = useState<string>("any");
  const [roomType, setRoomType] = useState<string>("any");
  const [location, setLocation] = useState<string>("any");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilter: ProjectCategory) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl font-serif mb-8 fade-in">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl fade-in">
            Explore our portfolio of stunning bathroom, kitchen and laundry renovations 
            across Sydney
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
                onClick={() => handleFilterChange(option.value as ProjectCategory)}
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

        {/* Sub Filters */}
        <div className="mb-12 flex flex-wrap gap-6 text-sm">
          {/* Browse by Mood */}
          <div className="flex items-center gap-3">
            <label className="text-muted-foreground">Browse by Mood:</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="px-3 py-1 border border-border bg-background text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-colors text-sm cursor-pointer"
            >
              <option value="any">Any</option>
              <option value="classic-charm">Classic Charm</option>
              <option value="modern-luxe">Modern Luxe</option>
              <option value="sleek-sanctuary">Sleek Sanctuary</option>
              <option value="tranquil-retreat">Tranquil Retreat</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="flex items-center gap-3">
            <label className="text-muted-foreground">Room Type:</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="px-3 py-1 border border-border bg-background text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-colors text-sm cursor-pointer"
            >
              <option value="any">Any</option>
              <option value="3-way-bathroom">3 Way Bathroom</option>
              <option value="powder-room">Powder Room</option>
              <option value="bathroom-with-bath">Bathroom (With Bath)</option>
              <option value="bathroom-no-bath">Bathroom (No Bath)</option>
              <option value="main-wc">Main & WC</option>
              <option value="laundry-bathroom">Laundry & Bathroom</option>
              <option value="laundry">Laundry</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <label className="text-muted-foreground">Location:</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-3 py-1 border border-border bg-background text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-colors text-sm cursor-pointer"
            >
              <option value="any">Any Location</option>
              <option value="stanmore">Stanmore</option>
              <option value="randwick">Randwick</option>
              <option value="hills-district">Hills District</option>
              <option value="carlingford">Carlingford</option>
              <option value="beaumont-hills">Beaumont Hills</option>
              <option value="balgowlah">Balgowlah</option>
              <option value="glebe">Glebe</option>
              <option value="kirribilli">Kirribilli</option>
              <option value="maroubra">Maroubra</option>
              <option value="north-manly">North Manly</option>
              <option value="petersham">Petersham</option>
              <option value="putney">Putney</option>
              <option value="seaforth">Seaforth</option>
              <option value="terrey-hills">Terrey Hills</option>
              <option value="marrickville">Marrickville</option>
              <option value="lilyfield">Lilyfield</option>
              <option value="quakers-hill">Quakers Hill</option>
              <option value="tempe">Tempe</option>
              <option value="rozelle">Rozelle</option>
              <option value="waverley">Waverley</option>
              <option value="elizabeth-bay">Elizabeth Bay</option>
              <option value="five-dock">Five Dock</option>
              <option value="pymble">Pymble</option>
              <option value="haberfield">Haberfield</option>
              <option value="double-bay">Double Bay</option>
              <option value="chatswood">Chatswood</option>
              <option value="clovelly">Clovelly</option>
              <option value="surry-hills">Surry Hills</option>
              <option value="darlinghurst">Darlinghurst</option>
              <option value="pyrmont">Pyrmont</option>
              <option value="coogee">Coogee</option>
              <option value="dee-why">Dee Why</option>
              <option value="mosman">Mosman</option>
              <option value="vaucluse">Vaucluse</option>
              <option value="bondi">Bondi</option>
              <option value="paddington">Paddington</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <NavLink
              key={project.id}
              to={`/projects/${project.slug}`}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-10 h-10 text-sm border transition-colors ${
                    currentPage === pageNumber
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* CTA */}
        <section className="mt-32 py-32 px-6 lg:px-12 bg-primary text-primary-foreground -mx-6 lg:-mx-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-serif mb-6">Ready for your own transformation?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Get a free online estimate and discover how we can create your dream space
            </p>
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Start Your Journey
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
