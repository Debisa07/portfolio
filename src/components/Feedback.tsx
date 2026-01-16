// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { useRef, useState } from "react";

// const testimonials = [
//   {
//     name: "Brooke Lowry",
//     role: "Senior Product Manager",
//     content: "Alex is a great communicator and true professional. His research and insights have helped me validate product-market fit for my product.",
//     rating: 5
//   },
//   {
//     name: "Michael Chen",
//     role: "Director of Innovation",
//     content: "Working with Alex was transformative for our brand. His strategic vision and attention to detail are unmatched in the industry.",
//     rating: 5
//   },
//   {
//     name: "Sarah Johnson",
//     role: "CMO, TechFlow",
//     content: "The level of creativity and strategic thinking brought to the table exceeded all our expectations. A true partner in success.",
//     rating: 5
//   },
//   {
//     name: "David Smith",
//     role: "Founder, StartUp",
//     content: "Incredible results. The rebranding campaign completely revitalized our market presence and drove significant growth.",
//     rating: 5
//   },
//   {
//     name: "Emily Davis",
//     role: "VP of Marketing",
//     content: "A master at connecting business goals with design execution. The ROI on our collaboration has been outstanding.",
//     rating: 5
//   },
//   {
//     name: "James Wilson",
//     role: "CEO, NextGen",
//     content: "Professional, insightful, and incredibly talented. I wouldn't hesitate to recommend Alex and his team to anyone.",
//     rating: 5
//   }
// ];

// const Feedback = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section id="feedback" ref={sectionRef} className="section-padding">
//       <div className="container-custom">
//         {/* Section Header */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <div className="lg:col-span-4">
//             <h2 className="text-display font-grotesk font-normal text-foreground leading-[0.95]">
//               Feedback
//             </h2>
//           </div>

//           <div className="lg:col-span-6 lg:col-start-7">
//             <p className="text-body text-muted-foreground/70">
//               I have always been dedicated to going above and beyond in my pursuit of excellence. The feedback from my clients serves as a true testament to my commitment and the age-old wisdom that actions speak louder than words.
//             </p>

//             <div className="flex items-center gap-6 mt-10">
//               <button 
//                 onClick={prevTestimonial}
//                 className="text-muted-foreground/70 hover:text-foreground transition-colors p-2"
//                 aria-label="Previous testimonial"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={nextTestimonial}
//                 className="text-muted-foreground/70 hover:text-foreground transition-colors p-2"
//                 aria-label="Next testimonial"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Testimonials */}
//         <div className="max-w-5xl relative min-h-[320px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               className="bg-transparent p-0 w-full text-left"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             >
//               {/* Rating */}
//               <div className="flex items-center gap-3 mb-6 text-muted-foreground/50">
//                 <span className="text-small">5</span>
//                 <span className="text-small">4</span>
//                 <span className="text-small">3</span>
//                 <span className="text-small">2</span>
//                 <span className="text-small">1</span>
//                 <span className="text-small">/5</span>
//               </div>

//               {/* Content */}
//               <blockquote className="text-subheading text-foreground font-light leading-relaxed mb-10 max-w-3xl">
//                 "{testimonials[currentIndex].content}"
//               </blockquote>

//               {/* Author */}
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-muted/40 rounded-full flex items-center justify-center overflow-hidden">
//                   <span className="text-sm font-medium text-foreground">
//                     {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
//                 <div>
//                   <div className="font-medium text-foreground">{testimonials[currentIndex].name}</div>
//                   <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="flex items-center justify-start mt-10 text-small text-muted-foreground/50 tracking-[0.2em] uppercase">
//           {currentIndex + 1} / {testimonials.length}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Feedback;