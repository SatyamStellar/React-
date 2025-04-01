// src/pages/Home.tsx
import { motion } from "framer-motion";
import { HeroSection } from "@/components/shared/HeroSection";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { schoolActivities } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/motionVariants";

export const Home = () => {
  return (
    <>
      <HeroSection />
      
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-16 bg-secondary/50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Welcome to Excellence in Education
          </motion.h2>
          
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading institution in providing quality education that nurtures
                creativity, critical thinking, and character development.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with knowledge, skills, and values necessary to
                excel in their chosen paths and contribute positively to society.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            School Activities
          </h2>
          <ImageCarousel images={schoolActivities} />
        </div>
      </section>
    </>
  );
};