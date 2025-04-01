// src/pages/About.tsx
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motionVariants";
import { faculty } from "@/lib/data";

export const About = () => {
  return (
    <div className="pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {/* History Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-12"
            >
              Our History
            </motion.h1>
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Founded in 1990, Brightfuture Academy has been a beacon of
                educational excellence for over three decades. What started as a
                small community school has grown into one of the region's most
                respected educational institutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be a global leader in education, fostering innovation,
                  creativity, and excellence in every student.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide comprehensive education that develops intellectual
                  capabilities, character, and leadership skills in our students.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Faculty
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-8"
            >
              {faculty.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="bg-card p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-center text-muted-foreground mb-2">
                    {member.position}
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};