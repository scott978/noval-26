import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { ChevronLeft, ChevronRight, Home, X } from "lucide-react";
import { useState, useEffect } from "react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectLaundry from "@/assets/project-laundry.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Project data - in a real app this would come from an API/database
const projectsData: Record<string, {
  title: string;
  mood: string;
  location: string;
  category: string;
  images: string[];
}> = {
  "stanmore": {
    title: "Stanmore",
    mood: "Sleek Sanctuary",
    location: "Stanmore, Sydney",
    category: "Bathroom",
    images: [projectBathroom, projectBathroom, projectBathroom, projectBathroom],
  },
  "randwick": {
    title: "Randwick",
    mood: "Modern Luxe",
    location: "Randwick, Sydney",
    category: "Bathroom",
    images: [projectBathroom, projectBathroom, projectBathroom],
  },
  "mosman": {
    title: "Mosman",
    mood: "Classic Charm",
    location: "Mosman, Sydney",
    category: "Kitchen",
    images: [projectKitchen, projectKitchen, projectKitchen],
  },
  "double-bay": {
    title: "Double Bay",
    mood: "Tranquil Retreat",
    location: "Double Bay, Sydney",
    category: "Laundry",
    images: [projectLaundry, projectLaundry, projectLaundry],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const project = slug ? projectsData[slug] : null;

  useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
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
            {project.category} Renovation Projects
          </NavLink>
          <span>/</span>
          <span className="text-foreground">{project.title}</span>
        </nav>

        {/* Project Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground tracking-wide uppercase mb-2">
            {project.category} Renovations
          </p>
          <h1 className="text-3xl font-serif mb-4">{project.title}</h1>
          <p className="text-xl text-primary font-serif italic">{project.mood}</p>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                    />
                    <div className="absolute bottom-6 left-6 bg-background/90 px-4 py-2 text-sm">
                      View More
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-12 w-12 border-border bg-background/80 hover:bg-background" />
            <CarouselNext className="right-4 h-12 w-12 border-border bg-background/80 hover:bg-background" />
          </Carousel>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {current + 1} of {count}
          </p>
        </div>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground -mx-6 lg:-mx-12">
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
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              api?.scrollPrev();
            }}
            className="absolute left-6 text-white hover:text-white/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <img
            src={project.images[current]}
            alt={`${project.title} - Image ${current + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              api?.scrollNext();
            }}
            className="absolute right-6 text-white hover:text-white/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <div className="absolute bottom-6 text-white text-sm">
            {current + 1} of {count}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
