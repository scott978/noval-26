import { NavLink } from "react-router-dom";
import heroImage from "@/assets/about-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const generalFaqs = [
    {
      question: "How does Novalé set itself apart from other bathroom, kitchen and laundry renovation companies?",
      answer: "Novalé offers four main points of difference: Quality assured processes and services (ISO9001), affordable pricing without sacrificing quality, track your project online via our app, and second-to-none after service care. Novalé is able to offer a streamlined experience that will minimise the common inconveniences that renovating a bathroom, kitchen or laundry may incur."
    },
    {
      question: "Why should I choose Novalé?",
      answer: "Novalé is the first and only renovation company in Australia to hold an ISO 9001 Quality Assurance accreditation. This means our processes, communication, and workmanship are audited to international standards. Combined with our 22+ years of experience, transparent pricing, and dedicated project management, we deliver stress-free renovations that exceed expectations."
    },
    {
      question: "Do you need an Interior Designer?",
      answer: "Novalé has a team of expert interior designers who specialise in creating custom, functional and visually stunning designs tailored to meet your specific needs and preferences. Our design team will consider factors such as layout, lighting, colour scheme, and materials to ensure your space is not only aesthetically pleasing but also functional and practical for everyday use. We'll work within your budget to create a design that is both affordable and luxurious."
    },
  ];

  const pricingFaqs = [
    {
      question: "How much do bathroom renovations cost?",
      answer: `Bathroom renovation costs vary depending on your home type (house or apartment), room size, scope of works, plumbing or layout changes, tile heights, and fixtures selected. Most importantly, we provide a fixed quote without any hidden costs.

**Bathroom Cost Guide:**
• From $18,700 – $25,300: A basic bathroom renovation
• From $26,400 – $36,300: A standard bathroom renovation
• From $30,800 onwards: A luxury bathroom renovation`
    },
    {
      question: "How much do kitchen renovations cost?",
      answer: `Kitchen renovation costs depend on similar factors including room size, layout changes, and the quality of fixtures and finishes you select.

**Kitchen Cost Guide:**
• From $30,000 – $40,000: A basic kitchen renovation
• From $40,000 – $80,000: A standard kitchen renovation
• From $80,000 onwards: A luxury kitchen renovation`
    },
    {
      question: "Does Novalé offer finance options for renovations?",
      answer: "Yes! Novalé understands that renovations can be a significant investment. We offer TLC (Total Lifestyle Credit) financing options starting from just $110 per week. TLC offers flexible repayment terms that can be tailored to suit individual budgets, ensuring you can enjoy your new space without undue financial strain. Our team can assist in submitting your application and obtaining pre-approval."
    },
  ];

  const processFaqs = [
    {
      question: "How long does a renovation take?",
      answer: "Most single-room renovations (bathroom, kitchen, or laundry) are completed within 2–4 weeks once materials are on-site. The timeline can vary depending on the scope of works, any structural changes required, and the complexity of your design. Your dedicated Project Manager will provide a detailed timeline during the planning phase."
    },
    {
      question: "Can I stay in my home during the renovation?",
      answer: "Yes, in most cases you can remain in your home during the renovation. Novalé can provide temporary amenities such as a portable shower or toilet if needed. If you're renovating multiple bathrooms, we can renovate them sequentially so you always have access to facilities."
    },
    {
      question: "What is included in my quote?",
      answer: "Your Novalé quote includes a detailed Scope of Works document that outlines exactly what's included: demolition, waterproofing, plumbing, electrical, tiling, fixtures, fittings, and all labour. We provide transparent, fixed pricing with no hidden fees so you know exactly what to expect."
    },
    {
      question: "How does the design process work?",
      answer: "Our design process starts with a consultation where we discuss your vision, needs, and budget. A Novalé Interior Designer will then create a custom design including 3D renders so you can visualize your new space. We guide you through material and fixture selections, and handle all documentation and approvals."
    },
  ];

  const guaranteeFaqs = [
    {
      question: "What guarantees do you offer?",
      answer: "Novalé offers a 10-year waterproofing guarantee using a premium waterproofing system that exceeds the standard 7-year requirement. All work also comes with statutory warranties covering labour and materials. Our ISO 9001 certification ensures consistent quality standards across every project."
    },
    {
      question: "Are your tradespeople licensed and insured?",
      answer: "Yes, all our trades are fully qualified, licensed, and insured. We hire from the top percentage of applicants and induct them to Novalé standards. Every tradesperson working on your project has been vetted and trained to deliver our high-quality workmanship."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Frequently Asked Questions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center text-background">
            <h1 className="text-3xl font-serif mb-4 fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-lg max-w-2xl mx-auto px-6 fade-in">
              Everything you need to know about your renovation journey
            </p>
          </div>
        </div>
      </section>

      {/* Quick Pricing Guide */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Quick Pricing Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 p-8 fade-in">
              <h3 className="text-xl font-serif mb-6">Bathroom Renovations</h3>
              <ul className="space-y-4 text-base">
                <li className="flex justify-between">
                  <span>Basic</span>
                  <span>$18,700 – $25,300</span>
                </li>
                <li className="flex justify-between">
                  <span>Standard</span>
                  <span>$26,400 – $36,300</span>
                </li>
                <li className="flex justify-between">
                  <span>Luxury</span>
                  <span>From $30,800</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-foreground/10 p-8 fade-in">
              <h3 className="text-xl font-serif mb-6">Kitchen Renovations</h3>
              <ul className="space-y-4 text-base">
                <li className="flex justify-between">
                  <span>Basic</span>
                  <span>$30,000 – $40,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Standard</span>
                  <span>$40,000 – $80,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Luxury</span>
                  <span>From $80,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-12">General Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`general-${index}`} className="border border-border px-6">
                <AccordionTrigger className="text-lg text-left py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-12">Pricing & Finance</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`pricing-${index}`} className="border border-border bg-background px-6">
                <AccordionTrigger className="text-lg text-left py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-12">The Renovation Process</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {processFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`process-${index}`} className="border border-border px-6">
                <AccordionTrigger className="text-lg text-left py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Guarantee FAQs */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-12">Guarantees & Quality</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {guaranteeFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`guarantee-${index}`} className="border border-border bg-background px-6">
                <AccordionTrigger className="text-lg text-left py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-2xl font-serif mb-6">
            Still Have Questions?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to help. Get in touch for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-block text-sm tracking-wide px-8 py-3 border border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/pricing"
              className="inline-block text-sm tracking-wide px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
            >
              View Pricing Guide
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
