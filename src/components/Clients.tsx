import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    name: "OPRO",
    logo: "https://assets.website-files.com/642ab9cb69d01c2bbd371806/643017b7a523ee763b24d73c_opro.png"
  },
  {
    name: "Priceline",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169c4a6d036cc8c90be1_pricline.svg"
  },
  {
    name: "Adidas / Crep",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169cc1b0ad43627517c3_crep.svg"
  },
  {
    name: "Dan John",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169ca2fc9f26c50ab34c_danjohn.svg"
  },
  {
    name: "The Real Deal",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169c972169aa22886086_trd.svg"
  },
  {
    name: "Josh Wood Colour",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169c18a4b1c1b2690b8e_jwc.svg"
  },
  {
    name: "Unicef",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169c8eaf64627392bcf8_unicef.svg"
  },
  {
    name: "Korn Ferry",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169c8eaf64dcb192bcf6_kornferry.svg"
  },
  {
    name: "Aveva",
    logo: "https://cdn.prod.website-files.com/642ab9cb69d01c2bbd371806/6430169ca38b0368d4369ea3_aveva.svg"
  }
];

const Clients = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="clients" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-display font-grotesk font-normal text-foreground leading-[0.95]">
            Collaborated with
          </h2>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 items-center justify-items-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-start p-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-8 md:max-h-9 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
