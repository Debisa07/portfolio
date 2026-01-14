import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        className="text-center container-custom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-hero font-grotesk font-medium text-foreground mb-4">404</h1>
        <p className="text-subheading text-muted-foreground mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-body text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
        >
          ← Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
