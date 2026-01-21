import { useParams } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Home, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";

// Project data - in a real app this would come from an API/database
const projectsData: Record<string, {
  title: string;
  mood: string;
  location: string;
  category: string;
  description: string;
  images: string[];
}> = {
  "stanmore": {
    title: "Stanmore",
    mood: "Sleek Sanctuary",
    location: "Stanmore, Sydney",
    category: "Bathroom",
    description: "A contemporary bathroom renovation featuring clean lines, natural materials, and a spa-like atmosphere that transforms daily rituals into moments of luxury.",
    images: [projectBathroom, projectBathroom, projectBathroom, projectBathroom, projectBathroom, projectBathroom],
  },
  "randwick": {
    title: "Randwick",
    mood: "Modern Luxe",
    location: "Randwick, Sydney",
    category: "Bathroom",
    description: "An elegant bathroom space blending modern fixtures with timeless design elements for a sophisticated retreat.",
    images: [projectBathroom, projectBathroom, projectBathroom, projectBathroom],
  },
  "mosman": {
    title: "Mosman",
    mood: "Classic Charm",
    location: "Mosman, Sydney",
    category: "Kitchen",
    description: "A stunning kitchen renovation that combines classic aesthetics with modern functionality.",
    images: [projectKitchen, projectKitchen, projectKitchen, projectKitchen, projectKitchen],
  },
  "double-bay": {
    title: "Double Bay",
    mood: "Tranquil Retreat",
    location: "Double Bay, Sydney",
    category: "Laundry",
    description: "A beautifully designed laundry space that maximizes efficiency without compromising on style.",
    images: [projectLaundry, projectLaundry, projectLaundry, projectLaundry],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl font-serif mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <NavLink 
            to="/projects" 
            className="inline-block text-sm tracking-wide px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Back to Projects
          </NavLink>
        </div>
      </div>
    );
  }

  const categoryPath = project.category.toLowerCase() === "bathroom" 
    ? "/bathroom-projects" 
    : "/projects";

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goToPrev = () => setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : project.images.length - 1);
  const goToNext = () => setLightboxIndex(prev => prev !== null && prev < project.images.length - 1 ? prev + 1 : 0);

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <section className="pt-24">
        <div className="w-full h-[50vh] min-h-[400px]">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <NavLink to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>
            <span>/</span>
            <NavLink to="/projects" className="hover:text-foreground transition-colors">
              Our Projects
            </NavLink>
            <span>/</span>
            <NavLink to={categoryPath} className="hover:text-foreground transition-colors">
              {project.category}
            </NavLink>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
          
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">
            {project.category} Renovation
          </p>
          <h1 className="text-3xl mb-4">{project.title}</h1>
          <p className="text-xl text-primary font-serif italic mb-6">{project.mood}</p>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-serif mb-12 text-center">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wide">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-serif mb-6">Starting on your Journey</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Get in touch with the friendly team at Novalé Bathrooms today, to see 
            how we can turn your bathroom renovation dream into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-6 text-white hover:text-white/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <img
            src={project.images[lightboxIndex]}
            alt={`${project.title} - Image ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 text-white hover:text-white/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <div className="absolute bottom-6 text-white text-sm">
            {lightboxIndex + 1} of {project.images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
